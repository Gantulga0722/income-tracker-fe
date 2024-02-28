import {
  LoginGeldIcon,
  LoginGeldTextIcon,
  GoogJobIcon,
} from "@/components/Icons";
import { GotoButton } from "@/components";
import Link from "next/link";

export default function currencySelect() {
  return (
    <div className="w-[1440px] h-[1024px] relative bg-white z-30">
      <div className="w-[1440px] h-[1024px] pt-10 pb-[399px] bg-white flex-col justify-start items-center gap-[141px] inline-flex">
        <div className="self-stretch flex-col justify-start items-center gap-12 inline-flex">
          <div className="p-[5.40px] justify-start items-center gap-[9.46px] inline-flex">
            <LoginGeldIcon />
            <LoginGeldTextIcon />
          </div>
          <ul className="steps steps-vertical lg:steps-horizontal">
            <li className="step step-primary">Currency</li>
            <li className="step step-primary">Balance</li>
            <li className="step step-primary">Finish</li>
          </ul>
        </div>
        <div className="self-stretch flex-col justify-start items-center inline-flex">
          <div className="self-stretch h-[228px] flex-col justify-start items-center gap-3 flex">
            <div className="flex-col justify-start items-center gap-4 flex">
              <div className="flex-col justify-start items-center gap-2 flex">
                <div className="p-2 bg-blue-600 rounded-[100px] justify-start items-center gap-2 inline-flex">
                  <div className="w-8 h-8 relative">
                    <GoogJobIcon />
                  </div>
                </div>
                <div className="text-slate-900 text-2xl font-semibold font-sans leading-loose">
                  Good Job!
                </div>
              </div>
            </div>
            <div className="w-96 text-slate-600 text-[16px] font-normal font-sans leading-6 flex text-center">
              Your very first account has been created. Now continue to
              dashboard and start tracking
            </div>
          </div>
          <Link href="/">
            <GotoButton />
          </Link>
        </div>
      </div>
    </div>
  );
}
