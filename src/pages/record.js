import {
  AddRecordButton,
  TypeCard,
  CategoryCard,
  AddCategoryCard,
  AmounRangeCard,
  PagingComp,
  SortCard,
  AllTransTotalCard,
  TransCard,
} from "@/components";
import Layout from "@/components/Layout";
import { useState } from "react";

export default function record() {
  const BE_URL = "http://localhost:4000/get-category";
  const [category, setCategory] = useState();

  // const handlerCategory = async () => {
  //   const options = {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(data),
  //   };
  //   const fetched_data = await fetch(BE_URL, options);
  //   const fetched_json = await fetched_data.json();

  //   console.log(fetched_json.result);

  //   setCategory(fetched_json);
  // };
  return (
    <div className="w-screen  bg-gray-100 ">
      <div className="w-[1440px] h-[1208px] relative pt-24 px-[120px] py-4 justify-between flex mx-auto">
        <div className="w-[282px] h-[1080px] px-4 py-6 bg-gray-50 rounded-xl border border-gray-200 flex-col justify-start items-start gap-6 inline-flex">
          <div className="w-[250px] h-[88px] flex-col justify-start items-start gap-6 inline-flex">
            <div className="text-black text-2xl font-semibold font-sans leading-loose">
              Records
            </div>
            <AddRecordButton />
          </div>
          <div className="w-[250px] h-8 p-4 bg-gray-100 rounded-lg border border-gray-300 justify-start items-center inline-flex mt-4">
            <input
              type="text"
              className="grow shrink basis-0 text-neutral-400 text-base font-normal font-sans leading-normal outline-none bg-gray-100 "
              placeholder="Search"
            />
          </div>
          <div className="w-[109px] h-36 flex-col justify-start items-start gap-4 inline-flex">
            <div className="text-gray-800 text-base font-semibold font-sans leading-normal">
              Types
            </div>
            <div className="w-[109px] relative">
              <TypeCard />
            </div>
          </div>
          <div className="w-[250px] h-[520px] flex-col justify-start items-start gap-4 inline-flex">
            <div className="w-[250px] h-8 justify-between items-center inline-flex">
              <div className="text-gray-800 text-base font-semibold font-sans leading-normal">
                Category
              </div>
              <div className="w-[61px] px-3 rounded-[20px] justify-center items-center gap-1 flex">
                <div className="opacity-20 text-gray-800 text-base font-normal font-sans leading-normal">
                  Clear
                </div>
              </div>
            </div>
            <div className="self-stretch h-[472px] flex-col justify-start items-start gap-2 flex">
              <CategoryCard category={category} />
            </div>
            <div>
              <AddCategoryCard />
            </div>
          </div>
          <div>
            <AmounRangeCard />
          </div>
        </div>
        <div className="px-4 py-6 flex flex-col gap-6">
          <div className="w-[894px] h-12 rounded-xl justify-between items-center inline-flex">
            <PagingComp />
            <SortCard />
          </div>
          <div className="w-[894px] h-[980px] flex-col justify-start items-start gap-6 inline-flex">
            <AllTransTotalCard />
            <div className="w-[894px] h-[404px] flex-col justify-start items-start gap-3 inline-flex">
              <div className="text-black text-base font-semibold font-sans leading-normal">
                Today
              </div>
              <div className="flex flex-col gap-3">
                <TransCard />
                <TransCard />
              </div>
            </div>
            <div className="w-[894px] h-[404px] flex-col justify-start items-start gap-3 inline-flex">
              <div className="text-black text-base font-semibold font-sans leading-normal">
                Yesterday
              </div>
              <div className="flex flex-col gap-3">
                <TransCard />
                <TransCard />
                <TransCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
record.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
