import { configureStore } from "@reduxjs/toolkit";
import StandardData from "./StandardConversionSlice";
import CodeTypes from "./CodesSlice";

export const store = configureStore({
  reducer: {
    stData: StandardData,
    cdData: CodeTypes,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispacth = typeof store.dispatch;
