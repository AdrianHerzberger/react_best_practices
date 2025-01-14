import React, { useState } from "react"
import TextField from "../../components/TextField/TextField";
import Button from "../../components/Button/Button";
import { Box, Grid2 } from "@mui/material";
import useAutoFocus from "../../hooks/useAutoFocus";

type AddTodoItemProps = {
    onAddClicked: (task: string) => void;
}


export const AddTodoItem = ({
    onAddClicked
}: AddTodoItemProps) => {
    const [task, setTask] = useState<string>("")

    const inputRef = useAutoFocus();

    const onTaskFieldChanges = (value: string) => {
        setTask(value);
        console.log(task);
    }

    const onFormSubmitted = (event: any) => {
        event.preventDefault();
        onAddClicked(task);
        setTask("")
    }

    return (
        <form onSubmit={onFormSubmitted}>
            <Grid2
                container
                direction="row"
                sx={{
                    justifyContent: "flex-start",
                    alignItems: "center",
                }}>
                <Box>
                    <TextField onInput={onTaskFieldChanges} value={task} ref={inputRef}></TextField>
                </Box>
                <Box>
                    <Button type="submit" primary>Add</Button>
                </Box>
            </Grid2>
        </form>
    )
};

export default AddTodoItem;
