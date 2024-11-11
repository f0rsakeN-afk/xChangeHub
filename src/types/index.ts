export interface CurrencyExchangeData {
  result: string;
  documentation: string;
  terma_of_use: string;
  time_last_update_unix: number;
  last_time_update_utc: string;
  time_next_update_unix: string;
  base_code: string;
  conversion_rates: {
    [currencyCode: string]: number;
  };
}
