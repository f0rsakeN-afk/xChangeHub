export interface CurrencyExchangeData {
  result: string;
  documentation: string;
  terms_of_use: string;
  time_last_update_unix: number;
  time_last_update_utc: string;
  time_next_update_unix: number;
  time_next_update_utc: string;
  base_code: string;
  conversion_rates: {
    [currencyCode: string]: number;
  };
}

export interface sortConfig {
  key: string;
  direction: "asc" | "desc";
}

export interface CodeTypes {
  documentation: string;
  terms_of_use: string;
  supported_codes: [string, string][];
}

export interface CompareCurrency {
  documentation: string;
  terms_of_use: string;
  time_last_update_unix: number;
  time_last_update_utc: string;
  time_next_update_unix: number;
  time_next_update_utc: string;
  base_code: string;
  target_code: string;
  conversion_rate: number;
  conversion_result?: number | null;
}
