import {
  LoginGeldIcon,
  LoginGeldTextIcon,
  CurrencyIcon,
  SortIcon,
  BalanceIcon,
} from "@/components/Icons";
import { ConfirmButton } from "@/components";

export default function currencySelect() {
  return (
    <div className="w-[1440px] h-[1024px] relative bg-white z-30">
      <div className="w-[1440px] h-[1024px] pt-10 pb-[399px] bg-white flex-col justify-start items-center gap-[141px] inline-flex">
        <div className="self-stretch flex-col justify-start items-center gap-12 inline-flex">
          <div className="p-[5.40px] justify-start items-center gap-[9.46px] inline-flex">
            <LoginGeldIcon />
            <LoginGeldTextIcon />
          </div>
          <div className="justify-start items-center gap-4 inline-flex">
            <div className="flex-col justify-start items-center gap-1 inline-flex">
              <div className="w-6 h-6 relative">
                <div className="w-6 h-6 left-0 top-0 absolute bg-blue-600 rounded-full" />
                <div className="w-5 left-[2px] top-[2px] absolute text-center text-white text-sm font-normal font-sans leading-tight">
                  1
                </div>
              </div>
              <div className="text-center text-slate-900 text-sm font-normal font-sans leading-tight">
                Currency
              </div>
            </div>
            <div className="stroke-1 self-stretch pb-6 justify-center items-center gap-2 flex bg-[#E5E7EB]"></div>
            <div className="flex-col justify-start items-center gap-1 inline-flex">
              <div className="w-6 h-6 relative">
                <div className="w-6 h-6 left-0 top-0 absolute bg-blue-600 rounded-full" />
                <div className="w-5 left-[2px] top-[2px] absolute text-center text-white text-sm font-normal font-sans leading-tight">
                  2
                </div>
              </div>
              <div className="text-center text-slate-900 text-sm font-normal font-sans leading-tight">
                Balance
              </div>
            </div>
            <div className="w-4 self-stretch pb-6 justify-center items-center gap-2 flex" />
            <div className="flex-col justify-start items-center gap-1 inline-flex">
              <div className="w-6 h-6 relative">
                <div className="w-6 h-6 left-0 top-0 absolute bg-gray-200 rounded-full" />
                <div className="w-5 left-[2px] top-[2px] absolute text-center text-slate-900 text-sm font-normal font-sans leading-tight">
                  3
                </div>
              </div>
              <div className="text-center text-slate-900 text-sm font-normal font-sans leading-tight">
                Finish
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex-col justify-start items-center gap-8 inline-flex">
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
          <ConfirmButton />
        </div>
      </div>
    </div>
  );
}
