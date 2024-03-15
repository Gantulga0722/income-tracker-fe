import {
  Category,
  Type,
  Transactions,
  YesTransactions,
  PieChartCardData,
  BarChartCardData,
  PieChartData,
} from "@/dummyData";

import {
  WifiIcon,
  GeldIconWhite,
  GeldIconText,
  IncomeIcon,
  ExpenseIcon,
  TransIcon,
  EyeIcon,
  CateArrowIcon,
  CatePlusIcon,
  CateSrokeIcon,
  PageLeftIcon,
  PageRighticon,
  SortIcon,
  FoodDrinkIcon,
} from "./Icons";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from "chart.js";
import { Doughnut, Bar, Line } from "react-chartjs-2";
import { CategoryModal } from "./CategoryModal";
import { useState } from "react";

import "react-range-slider-input/dist/style.css";

import { Slider, RangeSlider, Row, Col, InputGroup, InputNumber } from "rsuite";
import "rsuite/dist/rsuite.css";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
);

export function NoiseCard() {
  return (
    <div className="w-96 h-[216px] left-[120px] top-[104px] absolute bg-blue-600 rounded-[18px]">
      <div className="flex p-[4.703px] items-center gap-[8.231px] absolute left-[32px] top-[32px]">
        <div className="w-[20.747px] h-[20.452px]">
          <GeldIconWhite />
        </div>
        <div className="w-[41.97px] h-[14.524px]">
          <GeldIconText />
        </div>
      </div>
      <div className="origin-top-left rotate-[-40.19deg] opacity-50 w-[212.63px] h-[189px] left-[160px] top-[158.20px] absolute">
        <div className="w-[190px] h-[100px] left-0 top-0 absolute origin-top-left rotate-[-0.19deg] rounded-[50%] border border-[#F3F4F6]" />
        <div className="w-[190px] h-[100px] left-[3.81px] top-[4.51px] absolute origin-top-left rotate-[-0.19deg] rounded-[50%] border border-[#F3F4F6]" />
        <div className="w-[190px] h-[100px] left-[7.62px] top-[9.02px] absolute origin-top-left rotate-[-0.19deg] rounded-[50%] border border-[#F3F4F6]" />
        <div className="w-[190px] h-[100px] left-[11.43px] top-[13.54px] absolute origin-top-left rotate-[-0.19deg] rounded-[50%] border border-[#F3F4F6]" />
        <div className="w-[190px] h-[100px] left-[15.24px] top-[18.05px] absolute origin-top-left rotate-[-0.19deg] rounded-[50%] border border-[#F3F4F6]" />
        <div className="w-[190px] h-[100px] left-[19.06px] top-[22.56px] absolute origin-top-left rotate-[-0.19deg] rounded-[50%] border border-[#F3F4F6]" />
        <div className="w-[190px] h-[100px] left-[22.87px] top-[27.07px] absolute origin-top-left rotate-[-0.19deg] rounded-[50%] border border-[#F3F4F6]" />
        <div className="w-[190px] h-[100px] left-[26.68px] top-[31.59px] absolute origin-top-left rotate-[-0.19deg] rounded-[50%] border border-[#F3F4F6]" />
        <div className="w-[190px] h-[100px] left-[30.49px] top-[36.10px] absolute origin-top-left rotate-[-0.19deg] rounded-[50%] border border-[#F3F4F6]" />
        <div className="w-[190px] h-[100px] left-[34.30px] top-[40.61px] absolute origin-top-left rotate-[-0.19deg] rounded-[50%] border border-[#F3F4F6]" />
        <div className="w-[190px] h-[100px] left-[38.11px] top-[45.12px] absolute origin-top-left rotate-[-0.19deg] rounded-[50%] border border-[#F3F4F6]" />
        <div className="w-[190px] h-[100px] left-[41.92px] top-[49.63px] absolute origin-top-left rotate-[-0.19deg] rounded-[50%] border border-[#F3F4F6]" />
        <div className="w-[190px] h-[100px] left-[45.73px] top-[54.15px] absolute origin-top-left rotate-[-0.19deg] rounded-[50%] border border-[#F3F4F6]" />
        <div className="w-[190px] h-[100px] left-[49.55px] top-[58.66px] absolute origin-top-left rotate-[-0.19deg] rounded-[50%] border border-[#F3F4F6]" />
        <div className="w-[190px] h-[100px] left-[53.36px] top-[63.17px] absolute origin-top-left rotate-[-0.19deg] rounded-[50%] border border-[#F3F4F6]" />
      </div>
      <img
        className="w-[384.12px] h-[219.66px] left-0 top-0 absolute opacity-30 mix-blend-overlay rounded-tl-[18px] rounded-bl-[18px]"
        src="https://via.placeholder.com/"
      />
      <div className="w-10 h-10 left-[312px] top-[144px] absolute" />
      <div className="left-[32px] top-[128px] absolute flex-col justify-start items-start inline-flex">
        <div className="opacity-50 text-center text-white text-base font-normal font-sans leading-normal">
          <span>Cash</span>
        </div>
        <div className="flex justify-between items-center w-[330px]">
          <span className="text-center text-white text-2xl font-semibold font-sans leading-loose flex">
            10,000,00
          </span>
          <div className="w-10 h-10 shrink-0">
            <WifiIcon />
          </div>
        </div>
      </div>
      <div className="p-[4.70px] left-[32px] top-[32px] absolute justify-start items-center gap-[8.23px] inline-flex" />
    </div>
  );
}

export function IncomeCard() {
  return (
    <div className="h-52 left-[528px] top-[104px] absolute bg-white rounded-xl flex-col justify-start items-start inline-flex">
      <div className="w-96 h-14 px-6 py-4 border-b border-slate-200 justify-start items-center gap-2 inline-flex">
        <div className="w-2 h-2 bg-lime-500 rounded-full" />
        <div className="text-slate-900 text-base font-semibold font-sans leading-normal not-italic">
          Your Income
        </div>
      </div>
      <div className="w-96 h-[152px] px-6 pt-5 pb-6 flex-col justify-start items-start gap-4 inline-flex">
        <div className="w-[186px] flex-col justify-start items-start gap-1 flex">
          <div className="justify-start items-start gap-1 inline-flex">
            <div className="text-black text-4xl font-semibold font-sans leading-10">
              1,200,000
            </div>
            <div className="text-black text-4xl font-semibold font-sans leading-10">
              ₮
            </div>
          </div>
          <div className="text-slate-500 text-lg font-normal font-sans leading-7">
            Your Income Amount
          </div>
        </div>
        <div className="justify-start items-center gap-2 inline-flex">
          <div className="w-6 h-6 relative">
            <IncomeIcon />
          </div>
          <div className="text-black text-lg font-normal font-sans leading-7">
            32% from last month
          </div>
        </div>
      </div>
    </div>
  );
}

export function ExpenseCard() {
  return (
    <div className="h-[216px] left-[936px] top-[104px] absolute bg-white rounded-xl flex-col justify-start items-start inline-flex">
      <div className="w-96 h-14 px-6 py-4 border-b border-slate-200 justify-start items-center gap-2 inline-flex">
        <div className="w-2 h-2 bg-blue-600 rounded-full" />
        <div className="text-slate-900 text-base font-semibold font-sans leading-normal">
          Total Expenses
        </div>
      </div>
      <div className="w-96 h-40 px-6 pt-5 pb-6 flex-col justify-start items-start gap-4 inline-flex">
        <div className="flex-col justify-start items-start gap-1 flex">
          <div className="justify-start items-start gap-1 inline-flex">
            <div className="text-black text-4xl font-semibold font-sans leading-10">
              -1,200,000
            </div>
            <div className="text-black text-4xl font-semibold font-sans leading-10">
              ₮
            </div>
          </div>
          <div className="text-slate-500 text-lg font-normal font-sans leading-7">
            Your Income Amount
          </div>
        </div>
        <div className="justify-start items-center gap-2 inline-flex">
          <div className="w-6 h-6 relative">
            <ExpenseIcon />
          </div>
          <div className="text-black text-lg font-normal font-sans leading-7">
            32% from last month
          </div>
        </div>
      </div>
    </div>
  );
}

export function BarChartCard() {
  return (
    <div className="w-[588px] h-[284px] left-[120px] top-[344px] absolute bg-white rounded-xl flex-col justify-start items-start inline-flex">
      <div className="w-[588px] h-14 px-6 py-4 border-b border-slate-200 justify-start items-center gap-2 inline-flex">
        <div className="text-slate-900 text-base font-semibold font-sans leading-normal">
          Income - Expense
        </div>
      </div>
      <div className="w-[100%] h-[226px] py-4 flex-col justify-center items-center flex">
        <Bar data={BarChartCardData} />
      </div>
    </div>
  );
}

export function PieChartCard() {
  return (
    <div className="h-[284px] left-[732px] top-[344px] absolute bg-white rounded-xl flex-col justify-start items-start inline-flex">
      <div className="w-[588px] h-14 px-6 py-4 border-b border-slate-200 justify-between items-center inline-flex">
        <div className="text-slate-900 text-base font-semibold font-sans leading-normal">
          Income - Expense
        </div>
        <div className="text-gray-500 text-base font-normal font-sans leading-normal">
          Jun 1 - Nov 30
        </div>
      </div>
      <div className="w-[588px] h-[228px] px-6 py-6 justify-start items-start gap-10 inline-flex">
        <Doughnut data={PieChartData} />
        <div className="w-[337px] h-[180px] flex-col justify-start items-start gap-4 inline-flex py-3">
          {PieChartCardData.map((data) => (
            <div className="flex gap-2 items-center justify-center">
              <div className={`w-3 h-3 ${data.color} rounded-full`} />
              <div className="w-[100px] text-gray-900 text-sm font-normal font-sans leading-tight">
                {data.category}
              </div>
              <div className="flex w-[100px] text-gray-900 text-sm font-normal font-sans leading-tight gap-1">
                {data.amount}
                {data.currency}
              </div>
              <div className="w-[50px] text-gray-900 text-sm font-normal font-sans leading-tight gap-2">
                {data.percent}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div></div>
    </div>
  );
}

export function SingleTransCard() {
  return (
    <div className="self-stretch py-5 bg-white border-b border-gray-200 justify-between items-center inline-flex">
      <div className="justify-start items-center gap-4 flex">
        <div className="w-10 h-10 relative">
          <div className="w-10 h-10 left-0 top-0 absolute bg-blue-600 rounded-full" />
          <div className="w-5 h-5 left-[10px] top-[10px] absolute rounded">
            <TransIcon />
          </div>
        </div>
        <div className="flex-col justify-center items-start inline-flex">
          <div className="text-black text-base font-normal font-sans leading-normal">
            Lending & Renting
          </div>
          <div className="text-gray-500 text-xs font-normal font-sans leading-none">
            3 hours ago
          </div>
        </div>
      </div>
      <div className="justify-start items-center gap-2 flex">
        <div className="text-lime-500 text-base font-semibold font-sans leading-normal">
          -
        </div>
        <div className="text-lime-500 text-base font-semibold font-sans leading-normal">
          1,000₮
        </div>
      </div>
    </div>
  );
}

export function LastTransCard() {
  return (
    <div className="h-[460px] left-[120px] top-[652px] absolute bg-white rounded-xl flex-col justify-start items-start inline-flex">
      <div className="w-[1200px] h-14 px-6 py-4 border-b border-slate-200 justify-start items-center gap-2 inline-flex">
        <div className="text-slate-900 text-base font-semibold font-sans leading-normal">
          Last Records
        </div>
      </div>
      <div className="self-stretch h-[400px] px-6 flex-col justify-start items-start flex">
        <SingleTransCard />
        <SingleTransCard />
        <SingleTransCard />
        <SingleTransCard />
        <SingleTransCard />
      </div>
    </div>
  );
}

export function TypeCard() {
  return (
    <div className="w-[67px] h-8 px-3 rounded-lg justify-center items-start gap-2 inline-flex flex-col">
      {Type.map((t) => (
        <div className="flex gap-2 justify-center items-center">
          <input
            type="radio"
            className="w-4 h-4 rounded-[50%] border border-gray-200 justify-center items-center flex"
            id="1"
          />
          <label
            className="text-gray-800 text-base font-normal font-sans leading-normal"
            for="1"
          >
            {t.type}
          </label>
        </div>
      ))}
    </div>
  );
}

export function CategoryCard({ category }) {
  console.log("cat", category);
  return (
    <div className="self-stretch flex-col justify-start items-start gap-2 flex">
      {category.map((cate) => (
        <div className="px-3 rounded-lg justify-between items-center gap-2 flex w-[100%]">
          <div className="w-5 h-5 relative">
            <EyeIcon />
          </div>
          <div className="flex flex-nowrap text-gray-800 text-base font-normal font-sans leading-normal w-[170px]">
            {cate.name}
          </div>
          <div className="w-5 h-5">
            <CateArrowIcon />
          </div>
        </div>
      ))}
    </div>
  );
}

export function AddCategoryCard() {
  return (
    <div className="w-[250px] h-8 justify-between items-center inline-flex">
      <button
        className="rounded-lg justify-center items-center gap-2 flex"
        onClick={() => document.getElementById("CategoryModal").showModal()}
      >
        <div className="w-5 h-5 relative">
          <CatePlusIcon />
        </div>
        <div className="text-gray-800 text-base font-normal font-sans leading-normal">
          Add Category
        </div>
      </button>
      <dialog id="CategoryModal" className="modal">
        <div className="modal-box w-[550px] max-w-5xl">
          <CategoryModal />
        </div>
      </dialog>
    </div>
  );
}

export function AmounRangeCard() {
  const [value, setValue] = useState([0, 1000]);
  return (
    <div className="w-[245px] h-[152px] flex-col justify-start items-start gap-4 inline-flex">
      <div className="text-gray-800 text-base font-semibold font-sans leading-normal">
        Amount Range
      </div>
      <div className="flex-col justify-start items-center gap-6 flex">
        <div className="w-[245px] h-12 justify-start items-start gap-[189px] inline-flex relative">
          <Row>
            <div className="self-stretch justify-start items-start gap-4 inline-flex">
              <InputGroup>
                <InputNumber
                  min={0}
                  max={1000}
                  value={value[0]}
                  onChange={(nextValue) => {
                    const [start, end] = value;
                    if (nextValue > end) {
                      return;
                    }
                    setValue([nextValue, end]);
                  }}
                />
                <InputNumber
                  min={0}
                  max={1000}
                  value={value[1]}
                  onChange={(nextValue) => {
                    const [start, end] = value;
                    if (start > nextValue) {
                      return;
                    }
                    setValue([start, nextValue]);
                  }}
                />
              </InputGroup>
            </div>
            <Col md={0} xs={1000}>
              <RangeSlider
                progress
                style={{ marginTop: 20, width: 240 }}
                value={value}
                onChange={(value) => {
                  setValue(value);
                }}
              />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export function PagingComp() {
  return (
    <div className="h-8 justify-start items-center gap-4 inline-flex">
      <div className="w-8 h-8 bg-gray-200 rounded-lg justify-center items-center gap-1 flex">
        <div className="w-5 h-5 relative">
          <PageLeftIcon />
        </div>
      </div>
      <div className="text-black text-base font-normal font-sans leading-normal">
        Last 30 Days
      </div>
      <div className="w-8 h-8 bg-gray-200 rounded-lg justify-center items-center gap-1 flex">
        <div className="w-5 h-5 relative">
          <PageRighticon />
        </div>
      </div>
    </div>
  );
}

export function SortCard() {
  return (
    <div>
      <select className="select select-bordered max-w-xs w-[180px] h-12 bg-gray-50 rounded-lg border border-gray-300 justify-start items-center inline-flex text-gray-800 text-base font-semibold font-sans leading-normal">
        <option disabled selected>
          Select sort
        </option>
        <option className="text-gray-800 text-base font-semibold font-sans leading-normal">
          Newest first
        </option>
        <option className="text-gray-800 text-base font-semibold font-sans leading-normal">
          Oldest first
        </option>
      </select>
    </div>
  );
}

export function AllTransTotalCard() {
  return (
    <div className="w-[894px] h-12 px-6 py-3 bg-white rounded-xl border border-gray-200 justify-between items-center inline-flex">
      <div className="justify-start items-center gap-4 flex">
        <input
          type="checkbox"
          className="w-6 h-6 rounded border border-gray-200 justify-center items-center flex"
        />
        <div className="text-black text-base font-normal font-sans leading-normal">
          Select all
        </div>
      </div>
      <div className="justify-start items-center gap-2 flex">
        <div className="text-slate-400 text-base font-semibold font-sans leading-normal">
          -
        </div>
        <div className="text-slate-400 text-base font-semibold font-sans leading-normal">
          35,500₮
        </div>
      </div>
    </div>
  );
}

export function TransCard() {
  return (
    <div className="flex flex-col gap-3">
      {Transactions.map((trans) => (
        <div className="w-[894px] h-16 px-6 py-3 bg-white rounded-xl border border-gray-200 justify-between items-center inline-flex">
          <div className="justify-start items-center gap-4 flex">
            <input
              type="checkbox"
              className="w-6 h-6 rounded border border-gray-200"
            />
            <div className="w-10 h-10 bg-blue-600 rounded-full justify-center items-center flex">
              {trans.icon}
            </div>
            <div className="flex-col justify-start items-start inline-flex">
              <div className="text-black text-base font-normal font-sans leading-normal">
                {trans.category}
              </div>
              <div className="text-gray-500 text-xs font-normal font-sans leading-none">
                14:00
              </div>
            </div>
          </div>
          <div className="justify-start items-center gap-2 flex">
            <div className="text-green-500 text-base font-semibold font-sans leading-normal">
              -
            </div>
            <div className="text-green-500 text-base font-semibold font-sans leading-normal">
              1,000₮
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function YesTransCard() {
  return (
    <div className="flex flex-col gap-3">
      {YesTransactions.map((trans) => (
        <div className="w-[894px] h-16 px-6 py-3 bg-white rounded-xl border border-gray-200 justify-between items-center inline-flex">
          <div className="justify-start items-center gap-4 flex">
            <input
              type="checkbox"
              className="w-6 h-6 opacity-20 rounded border border-gray-800"
            />
            <div className="w-10 h-10 bg-blue-600 rounded-full justify-center items-center flex">
              {trans.icon}
            </div>
            <div className="flex-col justify-start items-start inline-flex">
              <div className="text-black text-base font-normal font-sans leading-normal">
                {trans.category}
              </div>
              <div className="text-gray-500 text-xs font-normal font-sans leading-none">
                14:00
              </div>
            </div>
          </div>
          <div className="justify-start items-center gap-2 flex">
            <div className="text-green-500 text-base font-semibold font-sans leading-normal">
              -
            </div>
            <div className="text-green-500 text-base font-semibold font-sans leading-normal">
              1,000₮
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function StrokeLine() {
  return (
    <div className="w-[20px] stroke-1 stroke-[#E5E7EB]">
      <CateSrokeIcon />
    </div>
  );
}
