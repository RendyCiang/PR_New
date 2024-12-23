import { HTMLAttributes, useState } from "react";
import { cn } from "../../lib/utils";

type Props = {
  icon?: string;
  labelIcon?: string;
  data?: string[];
  text?: string;
  label?: string;
  placeholder?: string;
};

/*
TIPS  SLICING UI
-> Jangan pelit padding
-> Pake kelipatan 2 (2,4,6,8,...)
-> Padding X > Padding Y
-> Kritis sama warna dan posisi
-> Kalo bisa jangan keseringan pake pl, pt, pr, pb
-> padding > 24 -> pertanda redflag
*/

export default function Dropdown({
  icon,
  text,
  label,
  data = [],
  placeholder,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement> & Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState(text);

  return (
    <div {...props} className={cn("w-full", className)}>
      {label && (
        <div
          className={cn("flex items-center justify-between w-full pr-1 mb-1")}
        >
          <p>{label}</p>
          {icon && <i className={icon}></i>}
        </div>
      )}
      <div className={cn("relative w-full")}>
        <div
          {...props}
          className={cn(
            "border border-gray-300 rounded w-full pl-4 pr-10 py-2",
            value === text ? "text-gray-400" : "text-black"
          )}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          {placeholder || value}
        </div>

        <i
          className={cn(
            "bx bx-chevron-down absolute right-2 top-1/2 transform -translate-y-1/2 transition",
            isOpen && "rotate-90"
          )}
        ></i>

        {isOpen && (
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
