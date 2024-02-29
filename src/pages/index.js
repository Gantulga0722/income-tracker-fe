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
import Layout from "@/components/Layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex flex-col min-h-screen w-screen h-[1148px] mx-auto relative bg-gray-100 items-center justify-between p-24] ${inter.className}`}
    >
      <div className="flex flex-col container min-h-screen max-w-[1440px] h-[1148px] mx-auto relative bg-gray-100 items-center justify-between p-24]">
        <NoiseCard />
        <IncomeCard />
        <ExpenseCard />
        <BarChartCard />
        <PieChartCard />
        <LastTransCard />
      </div>
    </main>
  );
}
Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
