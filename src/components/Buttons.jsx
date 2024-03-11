import { PlusIcon } from "@/components/Icons";
import { ExpenseModal, IncomeModal } from "@/components";

export const RecordButton = () => {
  return (
    <div>
      <button
        className="flex h-[32px] p-3 justify-center items-center gap-1 rounded-[20px] bg-[#0166FF]"
        onClick={() => document.getElementById("ExpenseModal").showModal()}
      >
        <div className="w-5 h-5">
          <PlusIcon />
        </div>
        <span className="text-[#FFF] font-sans text-[16px] font-normal not-italic leading-6">
          Record
        </span>
      </button>
      <dialog id="ExpenseModal" className="modal">
        <div className="modal-box w-[870px] max-w-5xl">
          <ExpenseModal />
        </div>
      </dialog>
    </div>
  );
};

export const AddRecordButton = () => {
  return (
    <div>
      <button
        className="w-[250px] h-8 px-3 bg-blue-600 rounded-[20px] justify-center items-center gap-1 inline-flex"
        onClick={() => document.getElementById("ExpenseModal").showModal()}
      >
        <div className="w-5 h-5">
          <PlusIcon />
        </div>
        <div className="text-white text-base font-normal font-sans leading-normal">
          Add
        </div>
      </button>
      <dialog id="ExpenseModal" className="modal">
        <div className="modal-box w-[870px] max-w-5xl">
          <ExpenseModal />
        </div>
      </dialog>
    </div>
  );
};

export const LoginButton = (props) => {
  const handler = props.handleLoginUser;

  return (
    <div
      className="w-96 h-12 px-4 bg-blue-600 rounded-[20px] justify-center items-center gap-1 inline-flex"
      onClick={() => {
        handler();
      }}
    >
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

export const ConfirmButton = ({ handlerCurrency, setStep }) => {
  return (
    <div
      className="w-96 h-12 px-4 bg-blue-600 rounded-[20px] justify-center items-center gap-1 inline-flex"
      onClick={() => {
        handlerCurrency(), setStep(2);
      }}
    >
      <div className="text-white text-xl font-normal font-sans leading-7">
        Confirm
      </div>
    </div>
  );
};
export const ConfirmButtonBalance = ({ setStep }) => {
  return (
    <div
      className="w-96 h-12 px-4 bg-blue-600 rounded-[20px] justify-center items-center gap-1 inline-flex"
      onClick={() => setStep(3)}
    >
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

export const AddRecordModalButton = ({ tab }) => {
  return (
    <div
      className={`w-[360px] h-10 px-3  ${
        tab == "expense" ? "bg-blue-600" : "bg-green-600"
      } rounded-[20px] justify-center items-center gap-1 inline-flex self-stretch`}
    >
      <div className="text-gray-50 text-base font-normal font-sans leading-normal">
        Add Record
      </div>
    </div>
  );
};

export const AddCategoryModalButton = ({ handlerCategory }) => {
  return (
    <div
      className="self-stretch h-10 px-3 bg-green-600 rounded-[20px] justify-center items-center gap-1 inline-flex cursor-pointer"
      onClick={() => {
        handlerCategory();
      }}
    >
      <div className="w-5 h-5">
        <PlusIcon />
      </div>
      <div className="text-gray-50 text-base font-normal font-sans leading-normal">
        Add
      </div>
    </div>
  );
};
