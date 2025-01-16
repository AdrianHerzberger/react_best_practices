import React from "react"
import classses from "./CanvasField.module.scss"

type CanvasFieldProps = {
    value?: string;
    label?: string;
    onInput?: (value: string) => void;
    className?: string;
};

export const CanvasField = (
    {
        label,
    }: CanvasFieldProps
) => {
    return (
        <div >
            {label ?
                <label>
                    {label}
                </label>
                : null
            }
            <canvas className={classses.CanvasField}></canvas>
        </div>
    )
};

export default CanvasField;
