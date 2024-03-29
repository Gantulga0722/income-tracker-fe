import { LoginButton } from "@/components";
import { LoginGeldIcon, LoginGeldTextIcon } from "@/components/Icons";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

export default function login() {
  const BE_URL = "http://localhost:4000/login";
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setPassword] = useState("");
  const router = useRouter();

  const handleLoginUser = async () => {
    const data = {
      email: userEmail,
      password: userPassword,
    };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const FETCHED_DATA = await fetch(BE_URL, options);
    const FETCHED_JSON = await FETCHED_DATA.json();
    console.log("fethc", FETCHED_JSON);

    const userId = FETCHED_JSON.result.rows[0].id;

    localStorage.setItem("userId", userId);

    console.log("user ID", localStorage.getItem("userId"));

    if (FETCHED_JSON.result.rowCount == 1) {
      router.push("/");
    } else {
      alert("Email or password is incorrect");
    }
  };

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
                onChange={(e) => setUserEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="h-12 rounded-lg flex-col justify-center items-center flex">
            <div className="self-stretch h-12 bg-gray-100 rounded-lg border border-gray-300 justify-start items-center inline-flex">
              <input
                type="password"
                className="grow shrink basis-0 text-neutral-400 bg-gray-100 text-base font-normal font-sans leading-normal w-96 h-10 outline-none p-4"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
        </div>
        <LoginButton handleLoginUser={handleLoginUser} />
        <div className="justify-start items-baseline inline-flex">
          <div className="text-slate-900 text-base font-normal font-sans leading-normal">
            Don’t have account?
          </div>
          <div className=" px-3 rounded-[20px] justify-center items-center gap-1 flex">
            <Link href="/singup">
              <div className="text-blue-600 text-base font-normal font-sans leading-normal">
                Sign up
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-1/2 bg-blue-600" />
    </div>
  );
}
