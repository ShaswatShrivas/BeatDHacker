import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import { RootState } from '../store';
import { updateLeaderboardEntry } from '../store/leaderboardSlice';
import questionsData from '../data/questions';
import { db } from '../firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { useAuth } from '../contexts/AuthContext';
import { useStreak } from '../contexts/useStreak';
import './CyberSecurityQuiz.css';

type Difficulty = 'easy' | 'medium' | 'hard' | 'hacker';

interface Question {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

const difficultyOrder: Difficulty[] = ['easy', 'medium', 'hard', 'hacker'];

const getAwardName = (difficulty: Difficulty): string => {
  switch (difficulty) {
    case 'easy':
      return 'Cyber Novice';
    case 'medium':
      return 'Digital Defender';
    case 'hard':
      return 'Security Sentinel';
    case 'hacker':
      return 'Cyber Mastermind';
    default:
      return 'Unknown';
  }
};

const CyberSecurityQuiz: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { level } = useParams<{ level: Difficulty }>();
  const [difficulty, setDifficulty] = useState<Difficulty>(level as Difficulty || 'easy');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userHealth, setUserHealth] = useState(100);
  const [hackerHealth, setHackerHealth] = useState(100);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [feedback, setFeedback] = useState('');
  const [showNext, setShowNext] = useState(false);
  const { currentStreak, maxStreak, updateStreak } = useStreak();
  const [shakeUser, setShakeUser] = useState(false);
  const [shakeHacker, setShakeHacker] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [streakAchievement, setStreakAchievement] = useState<number | null>(null);
  const [gameOver, setGameOver] = useState(false);

  const { user } = useAuth();
  const backgroundMusicRef = useRef<HTMLAudioElement | null>(null);

  // Sound effects
  const correctSoundUrl = '/sounds/correct.mp3';
  const wrongSoundUrl = '/sounds/wrong.mp3';
  const winSoundUrl = '/sounds/win.mp3';
  const loseSoundUrl = '/sounds/lose.mp3';
  const buttonClickSoundUrl = '/sounds/click.mp3';
  const backgroundMusicUrl = '/sounds/background.mp3';

  const playSound = (soundUrl: string) => {
    const audio = new Audio(soundUrl);
    audio.play().catch(error => console.error("Error playing sound:", error));
  };

  const playAudio = (audioUrl: string) => {
    const audio = new Audio(audioUrl);
    audio.play().catch(error => console.error("Error playing audio:", error));
  };

  useEffect(() => {
    loadQuestions();
    
    const bgMusic = new Audio(backgroundMusicUrl);
    bgMusic.loop = true;
    backgroundMusicRef.current = bgMusic;

    const playBackgroundMusic = () => {
      if (backgroundMusicRef.current) {
        backgroundMusicRef.current.play().catch(error => console.error("Error playing background music:", error));
      }
    };

    // Play background music on user interaction
    document.addEventListener('click', playBackgroundMusic, { once: true });

    return () => {
      if (backgroundMusicRef.current) {
        backgroundMusicRef.current.pause();
        backgroundMusicRef.current = null;
      }
      document.removeEventListener('click', playBackgroundMusic);
    };
  }, [difficulty]);

  const loadQuestions = () => {
    const allQuestions = questionsData[difficulty];
    const shuffled = allQuestions.sort(() => 0.5 - Math.random());
    setQuestions(shuffled.slice(0, 15));
    setCurrentQuestionIndex(0);
    setUserHealth(100);
    setHackerHealth(100);
    setCorrectAnswers(0);
    setQuizCompleted(false);
    setGameOver(false);
  };

  const handleOptionSelect = (index: number) => {
    setSelectedOption(index);
    playAudio(buttonClickSoundUrl);
  };

  const handleSubmit = () => {
    if (selectedOption === null || !questions[currentQuestionIndex]) return;

    if (selectedOption === questions[currentQuestionIndex].correct) {
      const newHackerHealth = Math.max(hackerHealth - 10, 0);
      setHackerHealth(newHackerHealth);
      setFeedback('Correct! ' + questions[currentQuestionIndex].explanation);
      updateStreak(true);
      setShakeHacker(true);
      setCorrectAnswers((prev) => prev + 1);
      playAudio(correctSoundUrl);

      if (newHackerHealth === 0) {
        setQuizCompleted(true);
        playAudio(winSoundUrl);
        saveScore();
      }
    } else {
      const newUserHealth = Math.max(userHealth - 20, 0);
      setUserHealth(newUserHealth);
      setFeedback('Incorrect. ' + questions[currentQuestionIndex].explanation);
      updateStreak(false);
      setShakeUser(true);
      playAudio(wrongSoundUrl);

      if (newUserHealth === 0) {
        setGameOver(true);
        playAudio(loseSoundUrl);
        saveScore();
      }
    }

    setShowNext(true);
  };

  const handleNext = () => {
    playAudio(buttonClickSoundUrl);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedOption(null);
      setFeedback('');
      setShowNext(false);
      setShakeUser(false);
      setShakeHacker(false);
    } else {
      setQuizCompleted(true);
      playAudio(winSoundUrl);
      saveScore();
    }
  };

  const handleNextLevel = () => {
    playAudio(buttonClickSoundUrl);
    const currentIndex = difficultyOrder.indexOf(difficulty);
    if (currentIndex < difficultyOrder.length - 1) {
      setDifficulty(difficultyOrder[currentIndex + 1]);
    } else {
      setQuizCompleted(true);
      playAudio(winSoundUrl);
    }
  };

  const handleRestart = () => {
    playAudio(buttonClickSoundUrl);
    loadQuestions();
  };

  const handleHome = () => {
    if (backgroundMusicRef.current) {
      backgroundMusicRef.current.pause();
      backgroundMusicRef.current = null;
    }
    playAudio(buttonClickSoundUrl);
    navigate('/');
  };

  const saveScore = async () => {
    if (user) {
      try {
        const userRef = doc(db, 'users', user.uid);
        const leaderboardRef = doc(db, 'leaderboard', user.uid);
      
        // Get the latest user data
        const userDoc = await getDoc(userRef);
        const userData = userDoc.data();

        if (userData) {
          let leaderboardData: {
            id: string;
            userId: string;
            displayName: string;
            score: number;
            difficulty: Difficulty;
            maxStreak: number;
            currentStreak: number;
            completedLevels: Difficulty[];
            award: string;
          } = {
            id: user.uid,
            userId: user.uid,
            displayName: user.displayName || 'Anonymous',
            score: correctAnswers,
            difficulty: difficulty,
            maxStreak: userData.maxStreak,
            currentStreak: userData.currentStreak,
            completedLevels: [difficulty],
            award: getAwardName(difficulty),
          };

          const leaderboardDoc = await getDoc(leaderboardRef);
          if (leaderboardDoc.exists()) {
            const existingData = leaderboardDoc.data() as typeof leaderboardData;
            leaderboardData = {
              ...existingData,
              id: user.uid,
              userId: user.uid,
              displayName: user.displayName || 'Anonymous',
              score: Math.max(existingData.score, correctAnswers),
              maxStreak: Math.max(existingData.maxStreak, maxStreak),
              currentStreak: currentStreak,
              difficulty: difficultyOrder.indexOf(difficulty) > difficultyOrder.indexOf(existingData.difficulty) 
                ? difficulty 
                : existingData.difficulty,
              completedLevels: Array.from(new Set([...existingData.completedLevels, difficulty])),
              award: getAwardName(difficulty),
            };
          }

          await setDoc(leaderboardRef, leaderboardData, { merge: true });
          dispatch(updateLeaderboardEntry(leaderboardData));
        }
      } catch (error) {
        console.error("Error saving score:", error);
      }
    }
  };

  const fadeInOut = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.5 }
  };

  const floatAnimation = {
    y: ["-10px", "10px"],
    transition: {
      y: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    }
  };

  const shakeAnimation = {
    x: [0, -10, 10, -10, 10, 0],
    transition: { duration: 0.5 }
  };

  return (
    <div className="quizContainer">
      {streakAchievement && (
        <div className="streakAchievement">
          Streak Achievement: {streakAchievement}!
        </div>
      )}
      <motion.div className="streakInfo"
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
      >
        <p>Current Streak: {currentStreak}</p>
        <p>Max Streak: {maxStreak}</p>
        <p>Difficulty: {difficulty}</p>
        <p>Award: {getAwardName(difficulty)}</p>
      </motion.div>

      <motion.div
        className="character"
        animate={floatAnimation}
        style={{ left: 20 }}
      >
        <iframe
          src="https://lottie.host/embed/d7570b8d-78a3-4be5-b427-75065dc5110a/c0KKZtEthw.lottie"
          frameBorder="0"
          className="giphy-embed"
          allowFullScreen
        ></iframe>
        <motion.div
          className="healthBar"
          style={{ width: userHealth + '%' }}
          animate={shakeUser ? shakeAnimation : {}}
        >
          {userHealth}%
        </motion.div>
      </motion.div>

      <motion.div
        className="character"
        animate={floatAnimation}
        style={{ right: 20 }}
      >
        <iframe
          src="https://lottie.host/embed/05813e02-5d7a-4db8-9608-95565b5f976c/AX2c7Ob5Yq.lottie"
          frameBorder="0"
          className="giphy-embed"
          allowFullScreen
        ></iframe>
        <motion.div
          className="healthBar"
          style={{ width: hackerHealth + '%' }}
          animate={shakeHacker ? shakeAnimation : {}}
        >
          {hackerHealth}%
        </motion.div>
      </motion.div>

      <div className="quizContent">
        {(!quizCompleted && !gameOver && questions[currentQuestionIndex]) ? (
          <AnimatePresence mode="wait">
            <motion.div key={currentQuestionIndex} {...fadeInOut}>
              <h2>{questions[currentQuestionIndex].question}</h2>
              <div className="options">
                {questions[currentQuestionIndex].options.map((option: string, index: number) => (
                  <button
                    key={index}
                    onClick={() => handleOptionSelect(index)}
                    className={`option ${selectedOption === index ? 'selected' : ''}`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        ) : (
          <div className="quizCompleted">
            <h2>
              {hackerHealth === 0 ? 'Hacker Defeated!' : 
               gameOver ? 'Game Over!' : 'Level Completed!'}
            </h2>
            <p>Your score: {correctAnswers} / {questions.length}</p>
            <p>Max streak: {maxStreak}</p>
            <p>Award: {getAwardName(difficulty)}</p>
            {correctAnswers >= 10 && difficulty !== 'hacker' && !gameOver && (
              <button onClick={handleNextLevel} className="nextLevelButton">
                Next Level
              </button>
            )}
            <button onClick={handleRestart} className="restartButton">
              Restart Level
            </button>
            <button onClick={handleHome} className="homeButton">
              Home
            </button>
          </div>
        )}

        {!quizCompleted && !gameOver && !showNext && (
          <button onClick={handleSubmit} className="submitButton" disabled={selectedOption === null}>
            Submit
          </button>
        )}

        {!quizCompleted && !gameOver && showNext && (
          <div className="feedbackSection">
            <p>{feedback}</p>
            <button onClick={handleNext} className="nextButton">
              Next Question
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CyberSecurityQuiz;

