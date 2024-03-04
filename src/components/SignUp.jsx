import { SignupButton } from "@/components";
import { LoginGeldIcon, LoginGeldTextIcon } from "@/components/Icons";
import Link from "next/link";

export function SignUp({ showLoader, setShowLoader }) {
  return (
    <div className="w-screen h-screen  bg-white flex ">
      <div className="w-1/2 flex-col justify-center items-center gap-10 inline-flex">
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
                type="password"
                className="grow shrink basis-0 text-neutral-400 bg-gray-100 text-base font-normal font-sans leading-normal w-96 h-10 outline-none p-4"
                placeholder="Password"
              />
            </div>
          </div>
          <div className="h-12 rounded-lg flex-col justify-center items-center flex">
            <div className="self-stretch h-12 bg-gray-100 rounded-lg border border-gray-300 justify-start items-center inline-flex">
              <input
                type="password"
                className="grow shrink basis-0 text-neutral-400 bg-gray-100 text-base font-normal font-sans leading-normal w-96 h-10 outline-none p-4"
                placeholder="Re-password"
              />
            </div>
          </div>
        </div>
        <div
          className="w-96 h-12 px-4 bg-blue-600 rounded-[20px] justify-center items-center gap-1 inline-flex"
          onClick={() => {
            setShowLoader("Loading");
          }}
        >
          <div className="text-white text-xl font-normal font-sans leading-7">
            Sign up
          </div>
        </div>
        <div className="justify-start items-baseline inline-flex">
          <div className="text-slate-900 text-base font-normal font-sans leading-normal">
            Already have account?
          </div>
          <div className=" px-3 rounded-[20px] justify-center items-center gap-1 flex">
            <Link href="/login">
              <div className="text-blue-600 text-base font-normal font-sans leading-normal">
                Log in
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-1/2 bg-blue-600" />
    </div>
  );
}
