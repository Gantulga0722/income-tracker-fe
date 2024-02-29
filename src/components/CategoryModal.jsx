import { CloseModalIcon } from "@/components/Icons";

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
              <div className="rounded-lg flex-col justify-center items-center inline-flex">
                <div className="h-12 p-4 bg-gray-50 rounded-lg border border-gray-300 justify-start items-center gap-1 inline-flex">
                  <div className="w-6 h-6 relative" />
                  <div className="w-6 h-6 relative" />
                </div>
              </div>
            </div>
            <div className="grow shrink basis-0 rounded-lg flex-col justify-center items-center inline-flex">
              <div className="self-stretch h-12 p-4 bg-gray-50 rounded-lg border border-gray-300 justify-start items-center inline-flex">
                <div className="grow shrink basis-0 text-slate-400 text-base font-normal font-sans leading-normal">
                  Name
                </div>
                <div className="w-6 h-6 relative" />
              </div>
            </div>
          </div>
          <div className="self-stretch h-10 px-3 bg-green-600 rounded-[20px] justify-center items-center gap-1 inline-flex">
            <div className="text-gray-50 text-base font-normal font-sans leading-normal">
              Add
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
