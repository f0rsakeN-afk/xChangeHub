import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CompareCurrency } from "@/types";
import { fetchCurrencyCompareData } from "@/services/fetchCurrencyCompareData";

type initialStateProps = {
  isCompareDataLoading: boolean;
  error: string | null;
  compareCurrencyData: CompareCurrency | null;
};

const initialState: initialStateProps = {
  isCompareDataLoading: false,
  error: null,
  compareCurrencyData: null,
};

const compareDataSlice = createSlice({
  name: "Compare",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCurrencyCompareData.pending, (state) => {
        state.isCompareDataLoading = true;
        state.error = null;
      })
      .addCase(
        fetchCurrencyCompareData.fulfilled,
        (state, action: PayloadAction<CompareCurrency>) => {
          state.isCompareDataLoading = false;
          state.compareCurrencyData = action.payload;
          state.error = null;
        }
      )
      .addCase(fetchCurrencyCompareData.rejected, (state, action) => {
        state.isCompareDataLoading = false;
        state.error =
          action.error.message || "Failed to fetch currency compare data!!";
      });
  },
});

export default compareDataSlice.reducer;
