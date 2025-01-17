import { memo } from "react";
import classes from "./ButtonSelect.module.scss";

type ButtonSelectProps = {
  onInput: (value: string) => void;
  className?: string;
  options: { label: string; value: string }[];
  value: string;
};

export const ButtonSelect = memo(
  ({
    onInput,
    className = "",
    options,
    value,
  }: ButtonSelectProps) => {
    return (
      <div className={className + " " + classes.ButtonSelectWrapper}>
        {options.map((option, index) => (
          <button
            key={index}
            className={
              classes.ButtonSelectOption +
              " " +
              (value === option.value ? classes.Selected : "")
            }
            onClick={() => onInput(option.value)}
          >
            {option.label}
          </button>
        ))}
      </div>
    );
  }
);