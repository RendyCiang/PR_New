import { HTMLAttributes } from "react";
import { cn } from "../../lib/utils";

export default function Button({
  ...props
}: HTMLAttributes<HTMLButtonElement>) {
  return (
    <div>
      <button
        {...props}
        className={cn(
          "border text-black font-bold p-1 rounded-md text-[14px] mt-2 hover:text-white hover:bg-gray-400 transition",
          props.className
        )}
      >
        {props.children}
      </button>
    </div>
  );
}
