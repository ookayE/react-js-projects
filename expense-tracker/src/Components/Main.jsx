import ExpenseView from "./ExpenseView";
import Summary from "./Summary";

export default function Main() {
  return (
    <div className="flex flex-col pr-5 pl-5">
      <div className="flex items-center justify-between mt-12">
        <p className="text-blue-400 text-5xl font-bold">Expense Tracker</p>
        <div className="flex items-center ">
          <button
            type="button"
            class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add New Transcription
          </button>
        </div>
      </div>

      <div className="flex justify-center">
        <Summary />
      </div>
      <div className="flex w-full items-start justify-evenly">
        <ExpenseView />
        <ExpenseView />
      </div>
    </div>
  );
}
