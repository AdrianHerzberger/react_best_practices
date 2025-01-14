import React, { useState } from "react"
import TextField from "../../components/TextField/TextField";
import Button from "../../components/Button/Button";
import { Box, Grid2 } from "@mui/material";

type AddTodoItemProps = {
    onAddClicked: (task: string) => void;
}


export const AddTodoItem = ({
    onAddClicked
}: AddTodoItemProps) => {
    const [task, setTask] = useState<string>("")

    const onTaskFieldChanges = (value: string) => {
        setTask(value);
        console.log(task);
    }

    const onClickAdd = () => {
        onAddClicked(task);
        setTask("")
    }

    return (
        <form>
            <Grid2
                container
                direction="row"
                sx={{
                    justifyContent: "flex-start",
                    alignItems: "center",
                }}>
                <Box>
                    <TextField onInput={onTaskFieldChanges} value={task}></TextField>
                </Box>
                <Box>
                    <Button onClick={onClickAdd} primary>Add</Button>
                </Box>
            </Grid2>
        </form>
    )
};

export default AddTodoItem;
