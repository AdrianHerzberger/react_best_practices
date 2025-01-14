import React, { memo } from "react"
import classes from "./TextField.module.scss"

interface TextFieldProps {
    label?: string;
    value?: string;
    name?: string;
    className?: string;
    onInput?: (value: string) => void;
}

export const TextField = memo(
    ({
        label = "",
        value,
        name = "",
        className,
        onInput = () => {},
    }: TextFieldProps) => {
        return (
            <div className={className}>
                {!label ? null :
                    <label htmlFor={name}>{label}
                    </label>
                }
                <input
                    name={name}
                    value={value}
                    type="text"
                    className={classes.TextField}
                    onChange={(event) =>
                        onInput((event.target as HTMLInputElement).value)
                    }
                />
            </div>
        );
    }
);

export default TextField;
