import { forwardRef, memo } from "react"
import classes from "./TextField.module.scss"

interface TextFieldProps {
    label?: string;
    value?: string;
    name?: string;
    className?: string;
    onInput?: (value: string) => void;
}

export const TextField = memo(
    forwardRef<HTMLInputElement, TextFieldProps>(
        ({ value, onInput, label = "", name = "", className }, ref?) => {
            return (
                <div className={className}>
                    {!label ? null :
                        <label htmlFor={name}>
                            {label}
                        </label>
                    }
                    <input
                        ref={ref}
                        name={name}
                        value={value}
                        type="text"
                        className={classes.TextField}
                        onChange={(event) =>
                            onInput && onInput((event.target as HTMLInputElement).value)
                        }
                    />
                </div>
            );
        }
    )
);

export default TextField;
