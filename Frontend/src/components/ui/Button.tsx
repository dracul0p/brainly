import type { ReactElement } from "react";

type Variants = "primary" | "secondary";

export interface ButtonProps {
  varient: Variants;
  size: "sm" | "md" | "lg";
  text: string;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  onClick: () => void;
}

const variantStyle = {
  primary: "bg-purple-600 text-white hover:bg-purple-700",
  secondary: "bg-purple-100 text-purple-700 hover:bg-purple-200",
};
const sizeStyle = {
  sm: "px-2 py-1 text-sm rounded-xl",
  md: "px-4 py-2 text-base rounded-md",
  lg: "px-6 py-3 text-lg rounded-sm",
};

const defaultStyles = " rounded-md font-light flex item-center  ";

const Button = (props: ButtonProps) => {
  return (
    <button
      className={`
        ${sizeStyle[props.size]}
        ${variantStyle[props.varient]}
        ${defaultStyles}
      `}
    >
      <div className="flex ">
        {" "}
        {props.startIcon ? (
          <div className="pr-2 pt-1">{props.startIcon}</div>
        ) : null}
        <div className="pr-1">{props.text}</div>
        {props.endIcon ? (
          <div className="pr-2 pt-1">{props.endIcon}</div>
        ) : null}
      </div>
    </button>
  );
};

export default Button;
