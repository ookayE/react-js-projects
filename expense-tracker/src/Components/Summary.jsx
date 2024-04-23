export default function Summary() {
  return (
    <div className="flex p-6 border border-1 border-solid border-gray-100 overflow-hidden rounded-md bg-white">
      <div className="flex w-full justify-center items-center sm:flex-row md:flex-row lg:flex-row xl:flex-row">
        {/* The class below has a -ml-20 in the video */}
        <div className="flex flex-1 w-full flex-col items-center justify-evenly">
          <div className="flex justify-evenly items-center bg-gray-100 w-full h-[100px] border border-solid border-gray-100">
            <div className="flex flex-col">
              <h2 className="text-gray-700">$ 100</h2>
              <p className="text-gray-600 ">Total Income</p>
            </div>
          </div>
          <div className="flex justify-evenly items-center bg-gray-100 w-full h-[100px] border border-solid border-gray-100">
            <div className="flex flex-col">
              <h2 className="text-gray-700">$ 100</h2>
              <p className="text-gray-600 ">Total Expense</p>
            </div>
          </div>
        </div>
        <div className="flex flex-1 mt-10 -ml-['90px'] mr-5 w-[300px] h-[300px] items-center justify-center">
          <h2 className="text-6xl font-bold">Chart</h2>
        </div>
      </div>
    </div>
  );
}
