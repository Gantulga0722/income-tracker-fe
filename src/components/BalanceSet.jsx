import {
  LoginGeldIcon,
  LoginGeldTextIcon,
  CurrencyIcon,
  SortIcon,
  BalanceIcon,
} from "@/components/Icons";
import { ConfirmButtonBalance } from "@/components";

export function BalanceSet({ setStep }) {
  return (
    <div className="w-screen h-screen bg-white flex justify-center items-start">
      <div className="pt-10 bg-white flex-col justify-center items-center gap-[141px] inline-flex">
        <div className="self-stretch flex-col justify-center items-center gap-12 inline-flex">
          <div className="p-[5.40px] justify-center items-center gap-[9.46px] inline-flex">
            <LoginGeldIcon />
            <LoginGeldTextIcon />
          </div>
          <ul className="steps steps-vertical lg:steps-horizontal">
            <li className="step step-primary">Currency</li>
            <li className="step step-primary">Balance</li>
            <li className="step">Finish</li>
          </ul>
        </div>
        <div className="self-stretch flex-col justify-center items-center gap-8 inline-flex">
          <div className="self-stretch h-[228px] flex-col justify-start items-center gap-3 flex">
            <div className="flex-col justify-start items-center gap-6 flex">
              <div className="flex-col justify-start items-center gap-4 flex">
                <div className="p-2 bg-blue-600 rounded-[100px] justify-start items-center gap-2 inline-flex">
                  <div className="w-8 h-8 relative">
                    <BalanceIcon />
                  </div>
                </div>
                <div className="text-slate-900 text-2xl font-semibold font-sans leading-loose">
                  Set up your cash Balance
                </div>
              </div>
              <div className="w-96 h-12 bg-gray-100 rounded-lg border border-gray-300 justify-start items-center inline-flex">
                <input
                  type="text"
                  className="w-96 h-10 p-4 justify-start items-center inline-flex bg-gray-100 outline-none"
                  placeholder="Email"
                ></input>
              </div>
            </div>
            <div className="w-96 text-slate-600 text-xs font-normal font-sans leading-none">
              How much cash do you have in your wallet? one
            </div>
          </div>
          <ConfirmButtonBalance setStep={setStep} />
        </div>
      </div>
    </div>
  );
}
