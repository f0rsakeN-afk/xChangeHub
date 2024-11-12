import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CurrencyExchangeData } from "@/types";
import { fetchCurrencyExchangeData } from "@/services/fetchCurrencyExchangeData";

interface initialStateProps {
  isLoading: boolean;
  standardConversionData: CurrencyExchangeData | null;
  error: string | null;
}

const initialState: initialStateProps = {
  isLoading: false,
  standardConversionData: null,
  error: null,
};

const StandardConversionSlice = createSlice({
  name: "standardConversionSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrencyExchangeData.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        fetchCurrencyExchangeData.fulfilled,
        (state, action: PayloadAction<CurrencyExchangeData>) => {
          state.isLoading = false;
          state.standardConversionData = action.payload;
          console.log(action.payload);
          state.error = null;
        }
      )
      .addCase(fetchCurrencyExchangeData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Failed to fetch currency data!!";
      });
  },
});

export default StandardConversionSlice.reducer;
