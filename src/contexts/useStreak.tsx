import { useEffect } from 'react';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { useAuth } from './AuthContext';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { updateStreak, setStreaks } from '../store/streakSlice';

export const useStreak = () => {
  const dispatch = useDispatch();
  const { currentStreak, maxStreak } = useSelector((state: RootState) => state.streak);
  const { user } = useAuth();

  useEffect(() => {
    const fetchStreaks = async () => {
      if (user) {
        const userRef = doc(db, 'users', user.uid);
        const userDoc = await getDoc(userRef);
        if (userDoc.exists()) {
          const userData = userDoc.data();
          dispatch(setStreaks({
            currentStreak: userData.currentStreak || 0,
            maxStreak: userData.maxStreak || 0,
          }));
        }
      }
    };

    fetchStreaks();
  }, [user, dispatch]);

  const updateStreakValue = async (correct: boolean) => {
    const newStreak = correct ? Math.min(currentStreak + 1, 60) : 0;
    const newMaxStreak = Math.max(maxStreak, newStreak);
    
    dispatch(setStreaks({
      currentStreak: newStreak,
      maxStreak: newMaxStreak,
    }));

    if (user) {
      const userRef = doc(db, 'users', user.uid);
      await setDoc(userRef, {
        currentStreak: newStreak,
        maxStreak: newMaxStreak,
        displayName: user.displayName,
        photoURL: user.photoURL,
      }, { merge: true });
    }
  };

  return { currentStreak, maxStreak, updateStreak: updateStreakValue };
};

