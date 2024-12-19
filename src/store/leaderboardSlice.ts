import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface LeaderboardEntry {
  id: string;
  userId: string;
  displayName: string;
  score: number;
  difficulty: string;
  completedLevels: string[];
  maxStreak: number;
}

interface LeaderboardState {
  entries: LeaderboardEntry[];
}

const initialState: LeaderboardState = {
  entries: [],
};

const leaderboardSlice = createSlice({
  name: 'leaderboard',
  initialState,
  reducers: {
    setLeaderboard: (state, action: PayloadAction<LeaderboardEntry[]>) => {
      state.entries = action.payload;
    },
    updateLeaderboardEntry: (state, action: PayloadAction<LeaderboardEntry>) => {
      const index = state.entries.findIndex(entry => entry.userId === action.payload.userId);
      if (index !== -1) {
        state.entries[index] = action.payload;
      } else {
        state.entries.push(action.payload);
      }
    },
  },
});

export const { setLeaderboard, updateLeaderboardEntry } = leaderboardSlice.actions;
export default leaderboardSlice.reducer;

