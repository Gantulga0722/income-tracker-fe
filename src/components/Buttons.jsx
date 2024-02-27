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
export const AddRecordButton = () => {
  return (
    <div className="w-[250px] h-8 px-3 bg-blue-600 rounded-[20px] justify-center items-center gap-1 inline-flex">
      <div className="w-5 h-5">
        <PlusIcon />
      </div>
      <div className="text-white text-base font-normal font-sans leading-normal">
        Add
      </div>
    </div>
  );
};

export const LoginButton = () => {
  return (
    <div className="w-96 h-12 px-4 bg-blue-600 rounded-[20px] justify-center items-center gap-1 inline-flex">
      <div className="text-white text-xl font-normal font-sans leading-7">
        Log in
      </div>
    </div>
  );
};
export const SignupButton = () => {
  return (
    <div className="w-96 h-12 px-4 bg-blue-600 rounded-[20px] justify-center items-center gap-1 inline-flex">
      <div className="text-white text-xl font-normal font-sans leading-7">
        Sign up
      </div>
    </div>
  );
};

export const ConfirmButton = () => {
  return (
    <div className="w-96 h-12 px-4 bg-blue-600 rounded-[20px] justify-center items-center gap-1 inline-flex">
      <div className="text-white text-xl font-normal font-sans leading-7">
        Confirm
      </div>
    </div>
  );
};
export const GotoButton = () => {
  return (
    <div className="w-96 h-12 px-4 bg-blue-600 rounded-[20px] justify-center items-center gap-1 inline-flex">
      <div className="text-white text-xl font-normal font-sans leading-7">
        Go to Dashboard
      </div>
    </div>
  );
};
