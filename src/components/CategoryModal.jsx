import { CloseModalIcon } from "@/components/Icons";
import { AddCategoryModalButton } from "@/components/Buttons";
import { CategoryIcons } from "@/dummyData";
import IconPicker from "react-icon-picker";
import { useState } from "react";

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

const icons = [
  "fas fa-camera",
  "fas fa-fish",
  "fas fa-align-center",
  "fas fa-align-justify",
];

export function CategoryModal() {
  const [state, setState] = useState({
    icon: "",
  });
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
              <span className={state.icon}></span>
              <IconPicker
                icons={icons}
                defaultValue="fas fa-camera"
                onChange={(icon) => {
                  setState({
                    ...state,
                    icon,
                  });
                }}
              />
            </div>
            <select className="select select-bordered w-[350px] h-12 self-stretch bg-gray-50 rounded-lg border border-gray-300 justify-start items-center inline-flex">
              <option disabled selected>
                Name
              </option>
              <option>Han Solo</option>
              <option>Greedo</option>
            </select>
          </div>
          <AddCategoryModalButton />
        </div>
      </div>
    </div>
  );
}
