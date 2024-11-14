import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface fetchCurrencyCompareDataProps {
  base_code: string;
  target_code: string;
  amount?: number;
}

export const fetchCurrencyCompareData = createAsyncThunk(
  "fetch/currencyExchangeData",
  async ({ base_code, target_code, amount }: fetchCurrencyCompareDataProps) => {
    let url = `https://v6.exchangerate-api.com/v6/${
      import.meta.env.VITE_API_KEY
    }/pair/${base_code}/${target_code}`;

    if (amount) {
      url = `${url}/${amount}`;
    }

    const response = await axios.get(url);
    return response.data;
  }
);
