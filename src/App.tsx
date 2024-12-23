import "boxicons/css/boxicons.min.css";
import Input from "./components/general/Input";
import Button from "./components/general/Button";
import Dropdown from "./components/form/Dropdown";

export default function App() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-slate-200">
      <div className="flex flex-col items-start justify-center bg-white p-7 rounded w-full max-w-[560px]">
        <h1 className="font-extrabold text-[1.5rem]">Payment Request</h1>
        <h1 className="mt-4 mb-2 font-bold">Contact Details</h1>
        <Dropdown
          label="Send Payment Request to"
          data={["Option 1", "Option 2", "Option 3"]}
          placeholder="Email"
        />
        <div className="grid grid-cols-2 gap-4 mt-3 w-full">
          <Input
            label="Name"
            type="Name"
            placeholder="Enter your Name"
            text="Text"
          />
          <Input
            label="Email"
            type="Email"
            placeholder="Enter your email"
            text="email"
          />
        </div>
        <h1 className="mt-6 font-bold">Request Details</h1>
        <div className="grid grid-cols-2 gap-4 mt-4 w-full">
          <Input label="Amount" type="number" placeholder="0.00" />
          <Input
            label="Due Date"
            type="date"
            placeholder="Enter date"
            text="date"
          />
        </div>
        <Dropdown
          className="mt-4"
          label="Company name to show on request"
          data={["Option 1", "Option 2", "Option 3"]}
          placeholder="Email"
        />
        <Dropdown
          className="mt-4"
          label="Destination Account"
          data={["Option 1", "Option 2", "Option 3"]}
          text="Email"
        />
        <p className="text-[10px] text-slate-400 mb-2">
          Incoming payments are placed in a secure receiving account to keep
          destination account details anonymous
        </p>

        <div className="bg-green-200 flex items-center justify-center gap-3 p-2 rounded w-full">
          <i className="bx bx-time-five text-[1.3rem]"></i>
          <p className="font-medium text-[15px] text-slate-black">
            Payment link expires on December 11, 2023
          </p>
        </div>
        <div className="flex items-center justify-between w-full mt-4">
          <Button className="px-4 py-2">Cancel</Button>
          <Button className="bg-green-600 text-white hover:bg-green-800 px-4 py-2">
            Send Request
          </Button>
        </div>
      </div>
    </div>
  );
}
