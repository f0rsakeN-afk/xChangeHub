import { configureStore } from "@reduxjs/toolkit";
import StandardData from "./StandardConversionSlice";

export const store = configureStore({
  reducer: {
    stData: StandardData,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispacth = typeof store.dispatch;
