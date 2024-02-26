import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen container w-[1440px] h-[1148px] mx-auto bg-[F3F4F6] flex-col items-center justify-between p-24 ${inter.className}`}
    ></main>
  );
}
