import { SignupButton } from "@/components";
import { LoginGeldIcon, LoginGeldTextIcon } from "@/components/Icons";

export default function signup() {
  return (
    <div className="w-[1440px] h-[1024px] relative bg-white z-30">
      <div className="w-[708px] h-[1024px] left-[732px] top-0 absolute bg-blue-600" />
      <div className="left-[222px] top-[276.84px] absolute flex-col justify-start items-center gap-10 inline-flex">
        <div className="p-[5.40px] justify-start items-center gap-[9.46px] inline-flex">
          <LoginGeldIcon />
          <LoginGeldTextIcon />
        </div>
        <div className="flex-col justify-start items-center gap-2 flex">
          <div className="text-slate-900 text-2xl font-semibold font-sans leading-loose">
            Create Geld account
          </div>
          <div className="text-slate-700 text-base font-normal font-sans leading-normal">
            Sign up below to create your Wallet account
          </div>
        </div>
        <div className="flex-col justify-start items-start gap-4 flex">
          <div className="h-12 rounded-lg flex-col justify-center items-center flex">
            <div className="self-stretch h-12 bg-gray-100 rounded-lg border border-gray-300 justify-start items-center inline-flex">
              <input
                type="text"
                className="grow shrink basis-0 text-neutral-400 bg-gray-100 text-base font-normal font-sans leading-normal w-96 h-10 outline-none p-4"
                placeholder="Name"
              />
            </div>
          </div>
          <div className="h-12 rounded-lg flex-col justify-center items-center flex">
            <div className="self-stretch h-12 bg-gray-100 rounded-lg border border-gray-300 justify-start items-center inline-flex">
              <input
                type="text"
                className="grow shrink basis-0 text-neutral-400 bg-gray-100 text-base font-normal font-sans leading-normal w-96 h-10 outline-none p-4"
                placeholder="Email"
              />
            </div>
          </div>
          <div className="h-12 rounded-lg flex-col justify-center items-center flex">
            <div className="self-stretch h-12 bg-gray-100 rounded-lg border border-gray-300 justify-start items-center inline-flex">
              <input
                type="text"
                className="grow shrink basis-0 text-neutral-400 bg-gray-100 text-base font-normal font-sans leading-normal w-96 h-10 outline-none p-4"
                placeholder="Password"
              />
            </div>
          </div>
          <div className="h-12 rounded-lg flex-col justify-center items-center flex">
            <div className="self-stretch h-12 bg-gray-100 rounded-lg border border-gray-300 justify-start items-center inline-flex">
              <input
                type="text"
                className="grow shrink basis-0 text-neutral-400 bg-gray-100 text-base font-normal font-sans leading-normal w-96 h-10 outline-none p-4"
                placeholder="Re-password"
              />
            </div>
          </div>
        </div>
        <SignupButton />
        <div className="justify-start items-baseline inline-flex">
          <div className="text-slate-900 text-base font-normal font-sans leading-normal">
            Already have account?
          </div>
          <div className=" px-3 rounded-[20px] justify-center items-center gap-1 flex">
            <div className="text-blue-600 text-base font-normal font-sans leading-normal">
              Log in
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
