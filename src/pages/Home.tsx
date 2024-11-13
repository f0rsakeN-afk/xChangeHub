import ExchangeRateTable from "@/components/myComponents/ExchangeRateTable"
import { fetchCurrencyExchangeData } from "@/services/fetchCurrencyExchangeData"
import { useAppDispatch, useAppSelector } from "@/store/hooks/hooks"
import { useEffect } from "react"

const Home = () => {
    // const { isLoading, standardConversionData } = useAppSelector(state => state.stData)
    // console.log(standardConversionData)
    // const dispatch = useAppDispatch()
    // useEffect(() => {
    //     dispatch(fetchCurrencyExchangeData())
    // }, [dispatch])
    const exchangeRateData = {
        "result": "success",
        "base_code": "USD",
        "time_last_update_utc": "Tue, 12 Nov 2024 00:00:01 +0000",
        "time_next_update_utc": "Wed, 13 Nov 2024 00:00:01 +0000",
        "conversion_rates": {
            "USD": 1,
            "EUR": 0.9380,
            "GBP": 0.7769,
            "BHD": 0.3760,
            "BIF": 2928.7072,
            "BMD": 1.0000,
            "BND": 1.3329,
            "BOB": 6.9498,
            "BRL": 5.7537,
            "BSD": 1.0000,
            "BTN": 84.4317,
            "BWP": 13.4545,
            "BYN": 3.3103,
            "BZD": 2.0000,
            "CAD": 1.3926,
            "CDF": 2865.8100,
            "CHF": 0.8801,
            "CLP": 969.8857,
            "CNY": 7.2159,
            "COP": 4378.6575,
            "CRC": 513.2319,
            "CUP": 24.0000,
            "CVE": 103.4333,
            "CZK": 23.7549,
            "DJF": 177.7210,
            "DKK": 6.9989,
            "DOP": 60.4498,
            "DZD": 133.8594,
            "EGP": 49.2140,
            "ERN": 15.0000,
            "ETB": 121.4045,
            "EUR": 0.9380,
            "FJD": 2.2531,
            "FKP": 0.7767,
            "FOK": 6.9989,
            "GBP": 0.7769,
            "GEL": 2.7257,
            "GGP": 0.7767,
            "GHS": 16.2467,
            "GIP": 0.7767,
            "GMD": 71.5688,
            "GNF": 8580.0371,
            "GTQ": 7.7417,
            "GYD": 209.1402,
            "HKD": 7.7757,
            "HNL": 25.2386,
            "HRK": 7.0677,
            "HTG": 131.5589,
            "HUF": 384.4000,
            "IDR": 15740.8230,
            "ILS": 3.7488,
            "IMP": 0.7767,
            "INR": 84.4293,
            "IQD": 1311.0683,
            "IRR": 42053.1371,
            "ISK": 139.0527,
            "JEP": 0.7767,
            "JMD": 158.4409,
            "JOD": 0.7090,
            "JPY": 153.6062,
            "KES": 129.1126,
            "KGS": 86.1408,
            "KHR": 4038.2145,
            "KID": 1.5204,
            "KMF": 461.4867,
            "KRW": 1398.3521,
            "KWD": 0.3073,
            "KYD": 0.8333,
            "KZT": 495.0722,
            "LAK": 21985.9142,
            "LBP": 89500.0000,
            "LKR": 292.6306,
            "LRD": 190.1652,
            "LSL": 17.9060,
            "LYD": 4.8505,
            "MAD": 9.9250,
            "MDL": 17.9452,
            "MGA": 4644.4772,
            "MKD": 57.0733,
            "MMK": 2103.1532,
            "MNT": 3415.7863,
            "MOP": 8.0090,
            "MRU": 39.8801,
            "MUR": 46.5432,
            "MVR": 15.4691,
            "MWK": 1743.1598,
            "MXN": 20.3966,
            "MYR": 4.4092,
            "MZN": 63.9133,
            "NAD": 17.9060,
            "NGN": 1668.0158,
            "NIO": 36.8828,
            "NOK": 11.0342,
            "NPR": 135.0907,
            "NZD": 1.6765,
            "OMR": 0.3845,
            "PAB": 1.0000,
            "PEN": 3.7653,
        }
    }
    return (
        <div>
            <ExchangeRateTable data={exchangeRateData} />
        </div>
    )
}

export default Home;


