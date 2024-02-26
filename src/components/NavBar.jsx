import { GredIcon } from "@/components/Icons";
import { RecordButton } from "@/components/Buttons";
import { Avatar } from "@/components/Avatar";

export const NavBar = () => {
  return (
    <div className="flex w-[100%] h-[72px] container px-[120px] py-4 justify-between items-center bg-white inline-flex fixed z-[20]">
      <div className="flex items-center gap-6">
        <GredIcon />
        <span className="text-[#0F172A] font-sans text-[16px] font-semibold not-italic leading-6">
          Dashboard
        </span>
        <span>Record</span>
      </div>
      <div className="flex items-center gap-6">
        <RecordButton />
        <Avatar />
      </div>
    </div>
  );
};
