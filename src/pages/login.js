import { LoginButton } from "@/components";
import { LoginGeldIcon, LoginGeldTextIcon } from "@/components/Icons";

export default function login() {
  return (
    <div className="w-screen h-screen  bg-white flex">
      <div className="w-1/2 flex-col items-center gap-10 inline-flex justify-center">
        <div className="p-[5.40px] justify-start items-center gap-[9.46px] inline-flex">
          <LoginGeldIcon />
          <LoginGeldTextIcon />
        </div>
        <div className="flex-col justify-start items-center gap-2 flex">
          <div className="text-slate-900 text-2xl font-semibold font-sans leading-loose">
            Welcome Back
          </div>
          <div className="text-slate-700 text-base font-normal font-sans leading-normal">
            Welcome back, Please enter your details
          </div>
        </div>
        <div className="flex-col justify-start items-start gap-4 flex">
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
        </div>
        <LoginButton />
        <div className="justify-start items-baseline inline-flex">
          <div className="text-slate-900 text-base font-normal font-sans leading-normal">
            Don’t have account?
          </div>
          <div className=" px-3 rounded-[20px] justify-center items-center gap-1 flex">
            <div className="text-blue-600 text-base font-normal font-sans leading-normal">
              Sign up
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2 bg-blue-600" />
    </div>
  );
}
