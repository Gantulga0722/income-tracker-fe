import Image from "next/image";
import { Inter } from "next/font/google";
import {
  NoiseCard,
  IncomeCard,
  ExpenseCard,
  BarChartCard,
  PieChartCard,
  LastTransCard,
} from "@/components";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex flex-col container min-h-screen max-w-[1440px] h-[1148px] mx-auto relative bg-gray-100 items-center justify-between p-24] ${inter.className}`}
    >
      <NoiseCard />
      <IncomeCard />
      <ExpenseCard />
      <BarChartCard />
      <PieChartCard />
      <LastTransCard />
    </main>
  );
}
