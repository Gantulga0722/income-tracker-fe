import { CloseModalIcon } from "@/components/Icons";
import { AddCategoryModalButton } from "@/components/Buttons";
import { CategoryIcons } from "@/dummyData";
import IconPicker from "react-icon-picker";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

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
  FoodDrinkIcon,
  HouseIcon,
  HouseLineIcon,
  CateBadgeIcon,
  CateIdCardIcon,
  CateLadderIcon,
  CateInterSecIcon,
  CateImgSqIcon,
  CateMagClasPIcon,
  CateMicIcon,
} from "./Icons/Icons";
import { useRouter } from "next/router";

export function CategoryModal() {
  const BE_URL = "http://localhost:4000/add-category";
  const [categoryIcon, setCategoryIcon] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [categoryID, setCategoryID] = useState(uuidv4());
  const router = useRouter();

  const handlerCategory = async () => {
    const data = {
      icon: categoryIcon,
      name: categoryName,
      id: categoryID,
    };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const fetched_data = await fetch(BE_URL, options);
    const fetched_json = await fetched_data.json();

    if ((fetched_json.message = "success")) {
      router.push("/record");
    } else {
      alert("Something went wrong");
    }
  };

  return (
    <div>
      <div className="w-[494px] h-[68px] px-6 py-5 bg-white border-b border-slate-200 justify-between items-center inline-flex">
        <div className="text-slate-900 text-xl font-semibold font-sans leading-7">
          Add Category
        </div>
        <div className="modal-action flex justify-center items-center">
          <form method="dialog">
            <button className="w-6 h-6">
              <CloseModalIcon />
            </button>
          </form>
        </div>
      </div>
      <div className="w-[494px] h-[168px] p-6 bg-white flex-col justify-start items-start gap-5 inline-flex">
        <div className="self-stretch h-[120px] flex-col justify-start items-start gap-8 flex">
          <div className="self-stretch justify-start items-start gap-3 inline-flex">
            <div className="justify-start items-start gap-3 flex">
              <select
                className="w-[84px] h-12 p-4 bg-gray-50 rounded-lg border border-gray-300 justify-start items-center gap-1 inline-flex"
                onChange={(e) => {
                  setCategoryIcon(e.target.value);
                }}
              >
                <option disabled selected>
                  Select icon
                </option>
                <option>Icon1</option>
                <option>Icon2</option>
                <option>Icon3</option>
                <option>Icon4</option>
              </select>
            </div>
            <input
              className="select select-bordered w-[350px] h-12 self-stretch bg-gray-50 rounded-lg border border-gray-300 justify-start items-center inline-flex"
              onChange={(e) => {
                setCategoryName(e.target.value);
              }}
              placeholder="Name"
            />
          </div>
          <AddCategoryModalButton handlerCategory={handlerCategory} />
        </div>
      </div>
    </div>
  );
}
