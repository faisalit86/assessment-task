import { configureStore } from "@reduxjs/toolkit";
import chatReducer from "./chatSlice";
import viewsReducer from "./viewsSlice";

export const store = configureStore({
  reducer: {
    chat: chatReducer,
    views:viewsReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
