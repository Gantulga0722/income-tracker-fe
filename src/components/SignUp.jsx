import { SignupButton } from "@/components";
import { LoginGeldIcon, LoginGeldTextIcon } from "@/components/Icons";
import Link from "next/link";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export function SignUp({ showLoader, setShowLoader }) {
  const BE_URL = "http://localhost:4000/signup";

  const handleSubmitUser = async (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
      id: uuidv4(),
    };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const FETCHED_DATA = await fetch(BE_URL, options);
    const FETCHED_JSON = await FETCHED_DATA.text();

    console.log(data);
  };

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
        <form action="" onSubmit={handleSubmitUser}>
          <div className="flex-col justify-start items-start gap-4 flex">
            <div className="h-12 rounded-lg flex-col justify-center items-center flex">
              <div className="self-stretch h-12 bg-gray-100 rounded-lg border border-gray-300 justify-start items-center inline-flex">
                <input
                  type="text"
                  className="grow shrink basis-0 text-neutral-400 bg-gray-100 text-base font-normal font-sans leading-normal w-96 h-10 outline-none p-4"
                  placeholder="Name"
                  name="name"
                  id="name"
                />
              </div>
            </div>
            <div className="h-12 rounded-lg flex-col justify-center items-center flex">
              <div className="self-stretch h-12 bg-gray-100 rounded-lg border border-gray-300 justify-start items-center inline-flex">
                <input
                  type="text"
                  className="grow shrink basis-0 text-neutral-400 bg-gray-100 text-base font-normal font-sans leading-normal w-96 h-10 outline-none p-4"
                  placeholder="Email"
                  name="=email"
                  id="email"
                />
              </div>
            </div>
            <div className="h-12 rounded-lg flex-col justify-center items-center flex">
              <div className="self-stretch h-12 bg-gray-100 rounded-lg border border-gray-300 justify-start items-center inline-flex">
                <input
                  type="password"
                  className="grow shrink basis-0 text-neutral-400 bg-gray-100 text-base font-normal font-sans leading-normal w-96 h-10 outline-none p-4"
                  placeholder="Password"
                  name="password"
                  id="password"
                />
              </div>
            </div>
            <div className="h-12 rounded-lg flex-col justify-center items-center flex">
              <div className="self-stretch h-12 bg-gray-100 rounded-lg border border-gray-300 justify-start items-center inline-flex">
                <input
                  type="password"
                  className="grow shrink basis-0 text-neutral-400 bg-gray-100 text-base font-normal font-sans leading-normal w-96 h-10 outline-none p-4"
                  placeholder="Re-password"
                  name="re-password"
                  id="re-password"
                />
              </div>
            </div>
          </div>

          <div
            className="w-96 h-12 px-4 bg-blue-600 rounded-[20px] justify-center items-center mt-5 inline-flex"
            onClick={() => {
              setShowLoader("Loading");
            }}
          >
            <input
              className="text-white text-xl font-normal font-sans leading-7 bg-blue-600 flex justify-center items-center"
              type="submit"
              placeholder="Sign UP"
            />
          </div>
        </form>
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
