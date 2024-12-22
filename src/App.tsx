import "boxicons/css/boxicons.min.css";
import Input from "./components/general/Input";
import Label from "./components/general/Label";
import InputField from "./components/form/InputField";
import Button from "./components/general/Button";

export default function App() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-slate-200">
      <div className="flex flex-col items-start justify-center bg-white p-7 rounded w-full max-w-md">
        <h1 className="font-extrabold text-[1.5rem]">Payment Request</h1>
        <h1 className="mt-6 font-bold">Contact Details</h1>
        <Label
          label="Send Payment Request to"
          icon="bx bx-reflect-horizontal"
        />
        <Input
          type="email"
          icon="bx bx-chevron-left absolute right-2 top-1/2 transform -translate-y-1/2"
          data={["Option 1", "Option 2", "Option 3"]}
          dropdown={true}
          text="Email"
        />
        <InputField
          data={[
            {
              label: "Name",
              type: "text",
              placeholder: "Enter your Name",
            },
            {
              label: "Email",
              type: "email",
              placeholder: "Enter your email",
            },
          ]}
        />
        <h1 className="mt-6 font-bold">Request Details</h1>
        <InputField
          className="pt-1"
          data={[
            {
              label: "Amount",
              type: "number",
              placeholder: "0.00",
              iconInput:
                "bx bx-dollar text-slate-400 absolute left-0 top-1/2 transform -translate-y-1/2",
            },
            {
              label: "Due Date",
              type: "date",
              text: "Enter your email",
              description: "",
            },
          ]}
        />
        <Label className="mt-6" label="Company name to show on request" />
        <Input
          type="email"
          icon="bx bx-chevron-left absolute right-2 top-1/2 transform -translate-y-1/2"
          data={["Option 1", "Option 2", "Option 3"]}
          dropdown={true}
          text="Email"
        />
        <Label className="mt-6" label="Destination Account" />
        <Input
          type="email"
          icon="bx bx-chevron-left absolute right-2 top-1/2 transform -translate-y-1/2"
          data={["Option 1", "Option 2", "Option 3"]}
          dropdown={true}
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
        <div className="flex items-center justify-between w-full">
          <Button>Cancel</Button>
          <Button className="bg-green-600 text-white hover:bg-green-800">
            Send Request
          </Button>
        </div>
      </div>
    </div>
  );
}
