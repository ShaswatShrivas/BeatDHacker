import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { setLeaderboard, LeaderboardEntry } from '../store/leaderboardSlice';
import { db } from '../firebase';
import { collection, query, orderBy, getDocs, limit } from 'firebase/firestore';
import './Leaderboard.css';
import { useAuth } from '../contexts/AuthContext';

const difficultyOrder = ['hacker', 'hard', 'medium', 'easy'];

const getAwardName = (difficulty: string): string => {
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

const Leaderboard: React.FC = () => {
  const dispatch = useDispatch();
  const leaderboard = useSelector((state: RootState) => state.leaderboard.entries);
  const { user } = useAuth();

  useEffect(() => {
    const fetchLeaderboard = async () => {
      if (!user) return;

      try {
        const leaderboardRef = collection(db, 'leaderboard');
        const leaderboardQuery = query(leaderboardRef, orderBy('maxStreak', 'desc'), limit(10));
        const querySnapshot = await getDocs(leaderboardQuery);
        const leaderboardData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as LeaderboardEntry[];

        // Sort the leaderboard data
        leaderboardData.sort((a, b) => {
          const diffA = difficultyOrder.indexOf(a.difficulty);
          const diffB = difficultyOrder.indexOf(b.difficulty);
          if (diffA !== diffB) return diffA - diffB;
          return b.maxStreak - a.maxStreak;
        });

        dispatch(setLeaderboard(leaderboardData));
      } catch (error) {
        console.error("Error fetching leaderboard:", error);
      }
    };
    
    fetchLeaderboard();
  }, [dispatch, user]);

  if (!user) {
    return (
      <div className="video-background">
        <video autoPlay muted loop>
          <source src="https://cdn.pixabay.com/video/2024/02/16/200735-913810300_large.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="leaderboard-container">
          <motion.h2
            className="typing-text"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 3, ease: 'linear' }}
          >
            Unlock your inner Cyber Warrior! Log in now to see where you rank!
          </motion.h2>
        </div>
      </div>
    );
  }
  
  if (leaderboard.length === 0) {
    return (
      <div className="leaderboard-container">
        <h2>Loading leaderboard...</h2>
      </div>
    );
  }

  return (
    <div className="video-background">
      <video autoPlay muted loop>
        <source src="https://cdn.pixabay.com/video/2024/02/16/200735-913810300_large.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="leaderboard-container">
        <h1>Top 10 Cyber Warriors</h1>
        <div className="leaderboard-list">
          {leaderboard.map((player, index) => (
            <motion.div
              key={player.id}
              className="leaderboard-item"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="rank">{index + 1}</div>
              <div className="player-info">
                <h3>{player.displayName || 'Anonymous'}</h3>
                <p>Max Streak: {player.maxStreak}</p>
                <p>Highest Difficulty: {player.difficulty}</p>
                <p>Award: {getAwardName(player.difficulty)}</p>
                <p>Completed Levels: {player.completedLevels.join(', ')}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;

