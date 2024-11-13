import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchCurrencyCodes } from "@/services/fetchCodeTypes";
import { CodeTypes } from "@/types";

interface initialStateProps {
  isLoading: boolean;
  codeTypesData: CodeTypes | null;
  error: string | null;
}

const initialState: initialStateProps = {
  isLoading: false,
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
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        fetchCurrencyCodes.fulfilled,
        (state, action: PayloadAction<CodeTypes>) => {
          state.isLoading = false;
          state.codeTypesData = action.payload;
          state.error = null;
        }
      )
      .addCase(fetchCurrencyCodes.rejected, (state, action) => {
        state.isLoading = false;
        state.error =
          action.error.message || "Failed  to fetch exchange codes!!";
      });
  },
});

export default CodesSlice.reducer;
