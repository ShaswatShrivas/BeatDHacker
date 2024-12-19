import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface StreakState {
  currentStreak: number;
  maxStreak: number;
}

const initialState: StreakState = {
  currentStreak: 0,
  maxStreak: 0,
};

const streakSlice = createSlice({
  name: 'streak',
  initialState,
  reducers: {
    updateStreak: (state, action: PayloadAction<{ correct: boolean }>) => {
      if (action.payload.correct) {
        state.currentStreak += 1;
        state.maxStreak = Math.max(state.maxStreak, state.currentStreak);
      } else {
        state.currentStreak = 0;
      }
    },
    setStreaks: (state, action: PayloadAction<StreakState>) => {
      state.currentStreak = action.payload.currentStreak;
      state.maxStreak = action.payload.maxStreak;
    },
  },
});

export const { updateStreak, setStreaks } = streakSlice.actions;
export default streakSlice.reducer;

