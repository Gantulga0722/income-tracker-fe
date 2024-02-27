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
} from "./components/Icons";

export const Category = [
  { category: "Food & Drinks" },
  { category: "Shopping" },
  { category: "Housing" },
  { category: "Transportation" },
  { category: "Vehicle" },
  {
    category: "Life & Entertainment",
  },
  {
    category: "Communication, PC",
  },
  {
    category: "Financial expenses",
  },
  { category: "Investments" },
  { category: "Income" },
  { category: "Others" },
];

export const Type = [{ type: "All" }, { type: "Income" }, { type: "Expense" }];

export const Transactions = [
  { icon: <TransIcon />, category: "lending & Renting" },
  { icon: <FoodDrinkIcon />, category: "Food & Drinks" },
];

export const YesTransactions = [
  { icon: <TransIcon />, category: "lending & Renting" },
  { icon: <FoodDrinkIcon />, category: "Food & Drinks" },
];
