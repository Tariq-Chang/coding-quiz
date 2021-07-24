import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import gameReducer from "../features/gameSlice";
export const store = configureStore({
  reducer: {
    user: userReducer,
    game: gameReducer,
  },
});
