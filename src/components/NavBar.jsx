import { GredIcon } from "@/components/Icons";
import { RecordButton } from "@/components/Buttons";
import { Avatar } from "@/components/Avatar";
import Link from "next/link";

export const NavBar = () => {
  return (
    <div className="w-[100%] h-[72px] container px-[120px] py-4 justify-between items-center bg-white inline-flex fixed z-[20]">
      <div className="flex items-center gap-6">
        <Link href="/">
          <GredIcon />
        </Link>
        <Link href="/">
          <span className="text-[#0F172A] font-sans text-[16px] font-semibold not-italic leading-6">
            Dashboard
          </span>
        </Link>
        <Link href="/record">
          <span>Record</span>
        </Link>
      </div>
      <div className="flex items-center gap-6">
        <RecordButton />
        <Avatar />
      </div>
    </div>
  );
};
