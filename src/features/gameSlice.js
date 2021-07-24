import { createSlice } from "@reduxjs/toolkit";

export const gameSlice = createSlice({
  name: "game",
  initialState: {
    score: 0,
    totQuestions: 0,
    correctAnswers: 0,
    lastQuestion: false,
  },

  reducers: {
    handleEndingPage: (state, action) => {
      state.score = action.payload.score;
      state.totQuestions = action.payload.totQuestions;
      state.correctAnswers = action.payload.correctAnswers;
      state.lastQuestion = action.payload.lastQuestion;
    },
    clearGameData: (state) => {
      state.score = null;
      state.totQuestions = null;
      state.correctAnswers = null;
      state.lastQuestion = false;
    }
  },
});

export const { handleEndingPage, clearGameData } = gameSlice.actions;

const selectScore = (state) => state.game.score;
const selectTotQuestions = (state) => state.game.totQuestions;
const selectCorrectAnswers = (state) => state.game.correctAnswers;
const selectLastQuestion = (state) => state.game.lastQuestion;

export { selectScore, selectTotQuestions, selectCorrectAnswers, selectLastQuestion };
export default gameSlice.reducer;
