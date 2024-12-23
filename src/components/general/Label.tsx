import { HTMLAttributes } from "react";
import { cn } from "../../lib/utils";

type Props = {
  label: string;
  icon?: string;
};

export default function Label({
  label,
  icon,
  ...props
}: HTMLAttributes<HTMLDivElement> & Props) {
  return (
    <div
      {...props}
      className={cn(
        "flex items-center justify-between w-full pr-1",
        props.className
      )}
    >
      <p>{label}</p>
      {icon && <i className={icon}></i>}
    </div>
  );
}

// Gada logic (useState, hooks, plain HTML)
// Dibawah ~50 line
