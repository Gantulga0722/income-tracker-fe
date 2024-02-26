import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex flex-col container mt-[72px] min-h-screen w-[1440px] h-[1148px] mx-auto relative bg-gray-100 flex-col items-center justify-between p-24 ${inter.className}`}
    ></main>
  );
}
