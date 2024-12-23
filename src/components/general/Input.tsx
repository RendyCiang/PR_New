import { useState } from "react";
import { InputHTMLAttributes } from "react";
import { cn } from "../../lib/utils";

type Props = {
  icon?: string;
  labelIcon?: string;
  data?: string[];
  dropdown?: boolean;
  text?: string;
  label?: string;
};

export default function Input({
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

  return (
    <div className="w-full">
      {label && (
        <div
          className={cn("flex items-center justify-between w-full pr-1 mb-1")}
        >
          <p>{label}</p>
          {icon && <i className={icon}></i>}
        </div>
      )}
      <div className={cn("relative w-full", className)}>
        <input
          {...props}
          className={cn(
            "border border-black rounded w-full pl-3 pr-10 py-1",
            value === text ? "text-gray-400" : "text-black"
          )}
          value={value}
          // onChange={}
          placeholder={props.placeholder}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        />
        {/* {dropdown &&
        (icon && isOpen ? (
          <i className={icon}></i>
        ) : (
          <i className="bx bx-chevron-down absolute right-2 top-1/2 transform -translate-y-1/2"></i>
        ))} */}
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
      </div>{" "}
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
