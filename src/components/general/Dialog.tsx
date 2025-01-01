import { forwardRef, HTMLAttributes, useEffect, useRef, useState } from "react";
import Button from "./Button";
import { cn } from "../../lib/utils";

type Props = {
  title: string;
  description: string;
  data: {
    label: string;
    placeholder: string;
    type: string;
  }[];
  // onClose: () => void;
  // isOpen: boolean;
};

const Dialog = forwardRef<
  HTMLDivElement,
  Props & HTMLAttributes<HTMLDivElement>
>(({ title, description, data, ...props }, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef<null | HTMLDivElement>(null);
  const buttonRef = useRef<null | HTMLParagraphElement>(null);
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      e.stopPropagation();
      const element = dialogRef.current;
      const button = buttonRef.current;

      const clickElement = e.target as HTMLElement;
      console.log(button, clickElement);

      if (!button) return;
      if (button.isEqualNode(clickElement)) {
        return;
      }

      console.log(element);
      if (!element) return;
      console.log("a");

      if (!element.contains(clickElement)) {
        setIsOpen(false);
      }
    };
    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <>
      <p
        className="border border-slate-800 text-white px-4 py-2 rounded text-[14px] hover:bg-gray-800 cursor-pointer transition "
        onClick={() => setIsOpen(true)}
        ref={buttonRef}
      >
        Edit Profile
      </p>
      <div
        className={cn(
          "absolute z-10 flex inset-0 items-center justify-center bg-black bg-opacity-50 duration-300 transition",
          isOpen ? "opacity-100 visible" : "opacity-0 invisible",
          props.className
        )}
      >
        <div
          className="border border-slate-800 rounded text-white px-6 py-8 w-[425px] bg-black transition-opacity duration-300"
          ref={dialogRef}
        >
          <div className="flex items-center justify-stretch">
            <h1 className="text-[16px] font-medium">{title}</h1>
            <i
              className="bx bx-x text-[1.5rem] ml-auto cursor-pointer text-gray-500 hover:text-white transition"
              onClick={() => setIsOpen(false)}
            ></i>
          </div>
          <p className="text-gray-500 text-[14px] mt-2">{description}</p>

          <div className="flex flex-col mt-8 gap-4">
            {data.map((item, i) => (
              <div className="flex items-center justify-between" key={i}>
                <p className="text-right w-[60px] text-[14px]">{item.label}</p>
                <input
                  type={item.type}
                  className="border border-slate-800 w-[300px] px-4 py-2 text-white bg-black rounded focus:outline-none focus:border-white text-[12px]"
                  placeholder={item.placeholder}
                ></input>
              </div>
            ))}
          </div>
          <div className="flex justify-end mt-8">
            <Button className="bg-white text-black font-medium hover:bg-slate-200 hover:text-black">
              Save Changes
            </Button>
          </div>
        </div>
      </div>
    </>
  );
});

export default Dialog;
