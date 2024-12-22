import { HTMLAttributes } from "react";
import { cn } from "../../lib/utils";
import Input from "../general/Input";
import Label from "../general/Label";

type Props = {
  data: {
    description?: string;
    label: string;
    iconLabel?: string;
    iconInput?: string;
    text?: string;
    type: string;
    placeholder?: string;
    className?: string;
  }[];
};

export default function InputField({
  data,
  ...props
}: HTMLAttributes<HTMLDivElement> & Props) {
  return (
    <div>
      <div
        {...props}
        className={cn("grid grid-cols-2 pt-2 gap-6 w-full", props.className)}
      >
        {data.map((item, i) => (
          <div key={i}>
            <Label label={item.label} icon={item.iconLabel} />
            <Input
              type={item.type}
              className={item.className}
              icon={item.iconInput}
              text={item.text}
              placeholder={item.placeholder}
            />
            {item.description && <p>{item.description}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
