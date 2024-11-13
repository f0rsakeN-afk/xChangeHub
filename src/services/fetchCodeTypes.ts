import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCurrencyCodes = createAsyncThunk(
  "fetch/currencyExchangeCodes",
  async () => {
    const response = await axios.get(`https://v6.exchangerate-api.com/v6/${
      import.meta.env.VITE_API_KEY
    }/codes
`);
    return response.data;
  }
);
