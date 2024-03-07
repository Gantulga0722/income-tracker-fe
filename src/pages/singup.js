import {
  SignUp,
  CurrencySelect,
  BalanceSet,
  GoTo,
  Loading,
} from "@/components";
import React, { useState } from "react";

export default function signup() {
  const [step, setStep] = useState(0);
  switch (step) {
    case 0:
      return (
        <div
          className={`${
            step == 0 ? "block" : "hidden"
          } flex flex-row h-screen w-full`}
        >
          <SignUp setStep={setStep} />
        </div>
      );
    case 1:
      return (
        <div className={`${step == 1 ? "pt-10 block" : "hidden"}`}>
          <CurrencySelect setStep={setStep} />
        </div>
      );
    case 2:
      return (
        <div className={`${step == 2 ? "pt-10 block" : "hidden"}`}>
          <BalanceSet setStep={setStep} />
        </div>
      );
    default:
      return (
        <div>
          <GoTo />
        </div>
      );
  }
}
