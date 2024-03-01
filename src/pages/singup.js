import {
  SignUp,
  CurrencySelect,
  BalanceSet,
  GoTo,
  Loading,
} from "@/components";
import React, { useState } from "react";

export default function signup() {
  const [showLoader, setShowLoader] = useState("signup");
  const [step, setStep] = useState(1);
  return (
    <div>
      <div
        className={`flex flex-row h-screen w-full ${
          showLoader == "signup" ? "block" : "hidden"
        }`}
      >
        <SignUp showLoader={showLoader} setShowLoader={setShowLoader} />
      </div>
      <div className={`${showLoader == "Loading" ? "block" : "hidden"}`}>
        <Loading showLoader={showLoader} setShowLoader={setShowLoader} />
      </div>
      <div
        className={`${
          showLoader == "currencyselect" ? "pt-10 block" : "hidden"
        }`}
      >
        <CurrencySelect
          setStep={setStep}
          step={step}
          showLoader={showLoader}
          setShowLoader={setShowLoader}
        />
      </div>
      <div
        className={`${showLoader == "balanceset" ? "pt-10 block" : "hidden"}`}
      >
        <BalanceSet
          setStep={setStep}
          s
          step={step}
          showLoader={showLoader}
          setShowLoader={setShowLoader}
        />
      </div>
      <div className={`${showLoader == "goto" ? "pt-10 block" : "hidden"}`}>
        <GoTo
          setStep={setStep}
          step={step}
          showLoader={showLoader}
          setShowLoader={setShowLoader}
        />
      </div>
    </div>
  );
}
