import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useStreak } from '../contexts/useStreak';
import { useAuth } from "../contexts/AuthContext";
import { signInWithGoogle, logOut } from "../firebase";
import './Home.css';

const titles = [
  "Quest & Conquer: Embark on Your Adventure",
  "Survive & Thrive: Build Your Legacy",
  "Mystery & Mastery: Solve the Secrets",
  "Challenge & Champion: Rise to Glory",
  "Explore & Excel: Uncover New Worlds",
];

const Home: React.FC = () => {
  const [showDifficulty, setShowDifficulty] = useState(false);
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const navigate = useNavigate();
  const { currentStreak, maxStreak } = useStreak();
  const { user } = useAuth();
  const buttonClickSoundRef = useRef<HTMLAudioElement | null>(null);
  const backgroundMusicRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 5000);

    buttonClickSoundRef.current = new Audio('/sounds/click.mp3');
    backgroundMusicRef.current = new Audio('/sounds/home-background.mp3');
    
    if (backgroundMusicRef.current) {
      backgroundMusicRef.current.loop = true;
      
      // Start playing background music
      const playPromise = backgroundMusicRef.current.play();

      if (playPromise !== undefined) {
        playPromise.then(_ => {
          // Autoplay started successfully
        }).catch(error => {
          console.log("Autoplay was prevented. Please enable autoplay in your browser settings.");
          // Show a play button or instructions to the user
        });
      }
    }

    return () => {
      clearInterval(interval);
      if (buttonClickSoundRef.current) {
        buttonClickSoundRef.current = null;
      }
      if (backgroundMusicRef.current) {
        backgroundMusicRef.current.pause();
        backgroundMusicRef.current = null;
      }
    };
  }, []);

  const playButtonClickSound = () => {
    if (buttonClickSoundRef.current) {
      buttonClickSoundRef.current.play().catch(error => console.error("Error playing button click sound:", error));
    }
  };

  const handleButtonClick = () => {
    playButtonClickSound();
    setShowDifficulty(!showDifficulty);
  };

  const handleDifficultySelect = (level: string) => {
    playButtonClickSound();
    navigate(`/quiz/${level}`);
  };

  const handleLogout = () => {
    playButtonClickSound();
    logOut();
  };

  const handleLogin = () => {
    playButtonClickSound();
    signInWithGoogle();
  };

  return (
    <div className="video-background"> 
      <video autoPlay muted loop> 
        <source src="https://cdn.pixabay.com/video/2023/08/20/176963-856267342_large.mp4" type="video/mp4" /> 
        Your browser does not support the video tag.
      </video>
      <main className="home-container">
        <motion.div
          className="streaks"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p>Max Streak: <span className="streak-value">{maxStreak}</span></p>
          <p></p>
          <p>Current Streak: <span className="streak-value">{currentStreak}</span></p>
        </motion.div>

        <div className="center-text">
          <AnimatePresence mode="wait">
            <motion.h1
              key={currentTitleIndex}
              className="headline"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {titles[currentTitleIndex]}
            </motion.h1>
          </AnimatePresence>
          {user ? (
            <div className="user-info">
              <p>Welcome, {user.displayName}!</p>
              <motion.button
                className="log-button"
                onClick={handleLogout}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Logout
              </motion.button>
            </div>
          ) : (
            <div className='user-info'>
              <motion.button
                className="log-button"
                onClick={handleLogin}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Login with Google
              </motion.button>
            </div>
          )}

          <div className="button-section">
            {user && (
              <>
                <motion.button
                  className="start-button"
                  onClick={handleButtonClick}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Quiz
                </motion.button>
                <AnimatePresence>
                  {showDifficulty && (
                    <motion.div
                      className="difficulty-buttons"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                    >
                      {['easy', 'medium', 'hard', 'hacker'].map((level) => (
                        <motion.button
                          key={level}
                          className="difficulty-button"
                          onClick={() => handleDifficultySelect(level)}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {level.charAt(0).toUpperCase() + level.slice(1)}
                        </motion.button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;

