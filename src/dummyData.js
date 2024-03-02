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

export const CategoryIcons = [
  { icon: <HouseIcon />, name: "HouseIcon" },
  { icon: <HouseLineIcon />, name: "HouseLineIcon" },
  { icon: <CateBadgeIcon />, name: "CateBadgeIcon" },
  { icon: <CateIdCardIcon />, name: "CateIdCardIcon" },
  { icon: <CateLadderIcon />, name: "CateLadderIcon" },
  { icon: <CateInterSecIcon />, name: "CateInterSecIcon" },
  { icon: <CateImgSqIcon />, name: "CateImgSqIcon" },
  { icon: <CateMagClasPIcon />, name: "CateMagClasPIcon" },
  { icon: <CateMicIcon />, name: "CateMicIcon" },
];

export const BarChartCardData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  datasets: [
    {
      label: "Income",
      data: [3000000, 3000000, 3000000, 3000000, 3000000, 3000000, 3000000],
      backgroundColor: "#84CC16",
      borderRadius: 10,
    },
    {
      label: "Expense",
      data: [2100000, 2100000, 2100000, 2100000, 2100000, 2100000, 2100000],
      backgroundColor: "#F97316",
      borderRadius: 10,
    },
  ],
};

export const PieChartData = {
  datasets: [
    {
      data: [5000000, 5000000, 5000000, 5000000, 5000000],
      backgroundColor: ["#1C64F2", "#E74694", "#FDBA8C", "#16BDCA", "#F2901C"],
    },
  ],
};

export const PieChartCardData = [
  {
    category: "Bills",
    amount: 5000000,
    currency: "₮",
    percent: "20%",
    color: "bg-blue-600",
  },
  {
    category: "Food",
    amount: 5000000,
    currency: "₮",
    percent: "20%",
    color: "bg-pink-500",
  },
  {
    category: "Shopping",
    amount: 5000000,
    currency: "₮",
    percent: "20%",
    color: "bg-orange-300",
  },
  {
    category: "Insurance",
    amount: 5000000,
    currency: "₮",
    percent: "20%",
    color: "bg-cyan-500",
  },
  {
    category: "Clothing",
    amount: 5000000,
    currency: "₮",
    percent: "20%",
    color: "bg-amber-500",
  },
];
