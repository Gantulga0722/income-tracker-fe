import {
  LoginGeldIcon,
  LoginGeldTextIcon,
  CurrencyIcon,
  SortIcon,
} from "@/components/Icons";
import { ConfirmButton } from "@/components";
import { useState } from "react";

export function CurrencySelect({ setStep, userId }) {
  const BE_URL = "http://localhost:4000/currency-select";
  const [currency, setCurrency] = useState("");

  const handlerCurrency = async () => {
    const data = {
      currency: currency,
      id: userId,
    };
    const option = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const FETCHED_DATA = await fetch(BE_URL, option);
    const FETCHED_JSON = await FETCHED_DATA.json();
  };

  return (
    <div className="w-screen h-screen relative bg-white flex justify-center items-start pt-10">
      <div className="bg-white flex-col justify-center items-center gap-[141px] inline-flex">
        <div className="self-stretch flex-col justify-start items-center gap-12 inline-flex">
          <div className="p-[5.40px] justify-center items-center gap-[9.46px] inline-flex">
            <LoginGeldIcon />
            <LoginGeldTextIcon />
          </div>
          <ul className="steps steps-vertical lg:steps-horizontal">
            <li className="step step-primary">Currency</li>
            <li className="step">Balance</li>
            <li className="step">Finish</li>
          </ul>
        </div>
        <div className="self-stretch flex-col justify-center items-center gap-8 inline-flex">
          <div className="self-stretch h-[228px] flex-col justify-start items-center gap-3 flex">
            <div className="flex-col justify-start items-center gap-6 flex">
              <div className="flex-col justify-start items-center gap-4 flex">
                <div className="p-2 bg-blue-600 rounded-[100px] justify-start items-center gap-2 inline-flex">
                  <div className="w-8 h-8 relative">
                    <CurrencyIcon />
                  </div>
                </div>
                <div className="text-slate-900 text-2xl font-semibold font-sans leading-loose">
                  Select base currency
                </div>
              </div>
              <select
                className="select select-bordered w-96 h-16 p-4"
                onChange={(e) => {
                  setCurrency(e.target.value);
                }}
              >
                <option disabled selected>
                  Select Currency
                </option>
                <option>MNT</option>
                <option>USD</option>
                <option>EUR</option>
                <option>CHY</option>
              </select>
            </div>
            <div className="w-96 text-slate-600 text-xs font-normal font-sans leading-none">
              Your base currency should be the one you use most often. All
              transaction in other currencies will be calculated based on this
              one
            </div>
          </div>
          <ConfirmButton handlerCurrency={handlerCurrency} setStep={setStep} />
        </div>
      </div>
    </div>
  );
}
