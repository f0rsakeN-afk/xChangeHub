import { configureStore } from "@reduxjs/toolkit";
import StandardDataReducer from "./StandardConversionSlice";
import CodeTypesReducer from "./CodesSlice";
import compareDataReducer from "./CompareDataSlice";

export const store = configureStore({
  reducer: {
    stData: StandardDataReducer,
    cdData: CodeTypesReducer,
    cmData: compareDataReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispacth = typeof store.dispatch;
