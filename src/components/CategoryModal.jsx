import { CloseModalIcon } from "@/components/Icons";
import { AddCategoryModalButton } from "@/components/Buttons";
import { CategoryIcons } from "@/dummyData";
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

export function CategoryModal() {
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
              <select className="select select-bordered rounded-lg flex-col justify-center items-center inline-flex w-[84px] h-12 p-4 bg-gray-50">
                <option disabled selected></option>
                {CategoryIcons.map((icon) => (
                  <option>
                    {/* {icon.icon} */}
                    {/* <div className="w-6 h-6">{icon.icon}</div> */}
                  </option>
                ))}
              </select>
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
