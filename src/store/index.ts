import { configureStore } from '@reduxjs/toolkit';
import streakReducer from './streakSlice';
import leaderboardReducer from './leaderboardSlice';

export const store = configureStore({
  reducer: {
    streak: streakReducer,
    leaderboard: leaderboardReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

