import { useEffect, useState } from "react";
import { InputHTMLAttributes } from "react";
import { cn } from "../../lib/utils";
import Label from "../general/Label";

type Props = {
  icon?: string;
  data?: string[];
  dropdown?: boolean;
  label?: string;
  text?: string;
};

export default function Dropdown({
  icon,
  text,
  label,
  data = [],
  dropdown = false,
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement> & Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState(text);

  useEffect(() => {
    const handleEventListener = () => console.log("Hello");
    window.addEventListener("click", handleEventListener);

    return () => {
      window.removeEventListener("click", handleEventListener);
    };
  }, []);

  return (
    <div className="w-full">
      <p>{label}</p>
      <div className={cn("relative w-full", className)}>
        <input
          {...props}
          className={cn(
            "border border-black rounded w-full pl-3 pr-10 py-1",
            value === text ? "text-gray-400" : "text-black"
          )}
          value={value}
          placeholder={props.placeholder}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        />
        {dropdown && (
          <i
            className={cn(
              "bx bx-chevron-down absolute right-2 top-1/2 transform -translate-y-1/2 transition",
              isOpen && "rotate-90"
            )}
          ></i>
        )}

        {dropdown && isOpen && (
          <ul className="absolute left-0 right-0 mt-1 bg-white border border-gray-300 rounded shadow-lg z-10">
            {data.map((item, index) => (
              <li
                key={index}
                className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                onClick={() => {
                  setValue(item);
                  setIsOpen(false);
                }}
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

// Short Circuit -> &&, ||

// Falsy -> "", 0, undefined, false, null
// Truthy

// && -> Nyari yang falsy
// console.log(true && 1000 && true && 400);

// || -> Nyari truthy
// console.log(false || "" || "" || false);
