import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCurrencyExchangeData = createAsyncThunk(
  "fetch/currencyExchangeData",
  async (baseCurrency?: string) => {
    const response = await axios.get(
      `https://v6.exchangerate-api.com/v6/${
        import.meta.env.VITE_API_KEY
      }/latest/${baseCurrency || "USD"}`
    );
    return response.data;
  }
);
