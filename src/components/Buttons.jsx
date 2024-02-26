import { PlusIcon } from "@/components/Icons";

export const RecordButton = () => {
  return (
    <div className="flex h-[32px] p-3 justify-center items-center gap-1 rounded-[20px] bg-[#0166FF]">
      <div className="w-5 h-5">
        <PlusIcon />
      </div>
      <span className="text-[#FFF] font-sans text-[16px] font-normal not-italic leading-6">
        Record
      </span>
    </div>
  );
};
