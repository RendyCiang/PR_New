import { useState } from "react";
import { InputHTMLAttributes } from "react";
import { cn } from "../../lib/utils";

type Props = {
  icon?: string;
  data?: string[];
  dropdown?: boolean;
  text?: string;
};

export default function Input({
  icon,
  text,
  data = [],
  dropdown = false,
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement> & Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState(text);

  return (
    <div className="relative w-full">
      <input
        {...props}
        className={cn(
          "border border-black rounded w-full pl-3 pr-10 py-1",
          className,
          value === text ? "text-gray-400" : "text-black"
        )}
        value={value}
        placeholder={props.placeholder}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      />
      {icon && dropdown && isOpen ? (
        <i className={icon}></i>
      ) : (
        <i className="bx bx-chevron-down absolute right-2 top-1/2 transform -translate-y-1/2"></i>
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
  );
}
