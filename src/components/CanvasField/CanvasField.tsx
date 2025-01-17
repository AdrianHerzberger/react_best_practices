import React, { useEffect, useRef, useState } from "react"
import classses from "./CanvasField.module.scss"

type CanvasFieldProps = {
    value?: string;
    label?: string;
    onInput?: (value: string) => void;
    className?: string;
};

type Coordinates = {
    x: number,
    y: number;
}

export const CanvasField = (
    {
        label,
        value,
        onInput = () => { },
    }: CanvasFieldProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isDrawing, setIsDrawing] = useState<boolean>(false);
    const canvasContext = canvasRef.current?.getContext("2d");
    const [previousCoordinates, setPreviousCoordinates] = useState<Coordinates>(
        {
            x: 0,
            y: 0,
        }
    );

    useEffect(() => {
        if (value && canvasContext) {
            const image = new Image();
            image.src = value;
            image.onload = () => {
                canvasContext.clearRect(0, 0, canvasRef.current!.width, canvasRef.current!.height);
                canvasContext.drawImage(image, 0, 0);
            };
        }
    }, [canvasContext, value]);

    const enableDrawing = () => (setIsDrawing(true));

    const startDrawing = (event: React.MouseEvent<HTMLCanvasElement>) => {
        if (!(isDrawing && canvasContext && canvasRef.current)) {
            return
        }

        const canvasEl = canvasRef.current;
        const { x: offsetX, y: offsetY } = canvasEl.getBoundingClientRect();

        const scaleX = canvasEl.width / canvasEl.clientWidth;
        const scaleY = canvasEl.height / canvasEl.clientHeight;

        const updatedCoordinates = {
            x: (event.clientX - offsetX) * scaleX,
            y: (event.clientY - offsetY) * scaleY,
        };

        if (previousCoordinates.x === 0 && previousCoordinates.y === 0) {
            setPreviousCoordinates(updatedCoordinates)
            return;
        }

        canvasContext.fillStyle = "blue";
        canvasContext.lineWidth = 6;
        canvasContext.moveTo(previousCoordinates.x, previousCoordinates.y);
        canvasContext.lineTo(updatedCoordinates.x, updatedCoordinates.y)
        canvasContext.stroke();
        setPreviousCoordinates(updatedCoordinates);
    }

    const endDrawing = () => {
        setPreviousCoordinates({
            x: 0,
            y: 0,
        });
        setIsDrawing(false);
        onInput(canvasRef.current?.toDataURL() || "");
    }

    return (
        <div >
            {label ?
                <label>
                    {label}
                </label>
                : null
            }
            <canvas
                width={"1024"}
                height={"768"}
                className={classses.CanvasField}
                onMouseDown={enableDrawing}
                onMouseMove={startDrawing}
                onMouseUp={endDrawing}
                onMouseLeave={endDrawing}
                ref={canvasRef}
            />
        </div>
    )
};

export default CanvasField;
