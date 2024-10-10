import React, { useEffect, useState } from "react";
import currencyconverter from "../src/assets/currencyconvertor.jpeg";
const Currencymain = () => {
  const [fromcurrency, setfromcurrency] = useState("USD");
  const [tocurrency, settocurrency] = useState("INR");
  const [amount, setamount] = useState(100);
  const [result, setresult] = useState("");
  const [count, setcount] = useState(0);
  const countryList = [
    "AFN",
    "ALL",
    " AMD",
    "ANG",
    "AOA",
    "AQD",
    "ARS",
    "AUD",
    "AZN",
    "BAM",
    "BBD",
    "BDT",
    "XOF",
    "BGN",
    "BHD",
    "BIF",
    "BMD",
    "BND",
    "BOB",
    "NOK",
    "BWP",
    "BYR",
    "BZD",
    "CAD",
    "CDF",
    "XAF",
    "CHF",
    "CLP",
    "CNY",
    "INR",
    "COP",
    "CRC",
    "CUP",
    "CVE",
    "CYP",
    "CZK",
    "DJF",
    "DKK",
    "DOP",
    "DZD",
    "ECS",
    "EEK",
    "EGP",
    "ETB",
    "EUR",
    "FJD",
    "FKP",
    "GBP",
    "GEL",
    "GGP",
    "GHS",
    "GIP",
    "GMD",
    "HKD",
    "HNL",
    "HUF",
    "IDR",
    "ILS",
    "IQD",
    "IRR",
    "ISK",
    "JMD",
    "JOD",
    "JPY",
    "KES",
    "KHR",
    "KMF",
    "KPW",
    "KRW",
    "LBP",
    "LKR",
    "LRD",
    "LSL",
    "LTR",
    "MAD",
    "MDL",
    "MKD",
    "MMK",
    "MNT",
    "NGN",
    "NIO",
    "NPR",
    "NZD",
    "OMR",
    "PAB",
    "PEN",
    "PGK",
    "PHP",
    "PKR",
    "PLN",
    "PYG",
    "RON",
    "RSD",
    "RUB",
    "RWF",
    "SAR",
    "SBD",
    "THB",
    "TJS",
    "TMT",
    "TND",
    "TOP",
    "TRY",
    "TTD",
    "TWD",
    "UGH",
    "USD",
    "UYU",
    "UZS",
    "VEF",
    "VND",
    "VUV",
    "ZAR",
  ];

  const handleformsubmit = (e) => {
    e.preventDefault();
    getExchangeRate();
  };

  const getExchangeRate = async () => {
    const API_KEY = "809a51fae0318127b9896a83";
    const API_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${fromcurrency}/${tocurrency}`;
    try {
      const responce = await fetch(API_URL);
      if (!responce.ok) throw Error("something went wrong!");

      const data = await responce.json();
      const rate = (data.conversion_rate * amount).toFixed(4);
      // console.log(rate);
      setresult(`${amount} ${fromcurrency}=${rate} ${tocurrency}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="h-[500px] w-[500px] border mt-10 flex flex-col   mb-12 mx-auto bg-orange-50">
        <img
          src={currencyconverter}
          className="h-[150px] mx-auto w-[150px] rounded mt-10"
          alt=""
        />
        <h1 className="text-center text-[30px] font-semibold text-red-500 mt-6">
          Exchange Rate Calculator
        </h1>
        <p className="text-center text-[15px] mt-6">
          Choose the currency and the amount to get the exchange rate
        </p>

        <div className=" mt-6 flex justify-between">
          <select
            className="ml-2"
            value={fromcurrency}
            onChange={(e) => setfromcurrency(e.target.value)}
          >
            {countryList.map((currency) => (
              <option value={currency} key={currency}>
                {currency}
              </option>
            ))}
          </select>
          <input
            type="number"
            value={amount}
            onChange={(e) => setamount(e.target.value)}
            className="border w-12"
          />
        </div>

        <div className="flex justify-between mt-5 ml-2">
          <button
            className="bg-red-500 px-5 py-2 rounded text-[15px]"
            onClick={handleformsubmit}
          >
            Swap
          </button>
          <p className="text-[20px] text-red-400">{result} </p>
        </div>

        <div className=" mt-6 flex justify-between">
          <select
            className="ml-2"
            value={tocurrency}
            onChange={(e) => settocurrency(e.target.value)}
          >
            {countryList.map((currency) => (
              <option value={currency} key={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
};
export default Currencymain;
