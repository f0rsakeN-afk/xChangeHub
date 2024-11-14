import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchCurrencyCodes } from "@/services/fetchCodeTypes";
import { CodeTypes } from "@/types";

interface initialStateProps {
  isTypesLoading: boolean;
  codeTypesData: CodeTypes | null;
  error: string | null;
}

const initialState: initialStateProps = {
  isTypesLoading: false,
  codeTypesData: null,
  error: null,
};

const CodesSlice = createSlice({
  name: "CodeSlice",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCurrencyCodes.pending, (state) => {
        state.isTypesLoading = true;
        state.error = null;
      })
      .addCase(
        fetchCurrencyCodes.fulfilled,
        (state, action: PayloadAction<CodeTypes>) => {
          state.isTypesLoading = false;
          state.codeTypesData = action.payload;
          state.error = null;
        }
      )
      .addCase(fetchCurrencyCodes.rejected, (state, action) => {
        state.isTypesLoading = false;
        state.error =
          action.error.message || "Failed  to fetch exchange codes!!";
      });
  },
});

export default CodesSlice.reducer;
