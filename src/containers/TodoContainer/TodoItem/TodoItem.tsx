
import { memo } from "react";
import classes from "./TodoItem.module.scss";
import { Todo } from "../../../models/Todo";
import CheckBoxField from "../../../components/CheckBoxField/CheckBoxField";
import Button from "../../../components/Button/Button";
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import EditIcon from '@mui/icons-material/Edit';
import { Grid2 } from "@mui/material";


type TodoItemProps = {
    todo: Todo;
    onEditClicked?: (id: number ) => void;
    onDeleteClicked?: (id: number) => void;
    onDoneChecked?: (id: number, isDone: boolean ) => void;
};

export const TodoItem = memo(
    ({ todo, onDeleteClicked, onEditClicked, onDoneChecked }: TodoItemProps) => {

        const onClickEdit = () => {
            onEditClicked && onEditClicked(todo.id );
        };

        const onClickDelete = () => {
            onDeleteClicked && onDeleteClicked(todo.id);
        };

        const onCheckDone = () => {
            onDoneChecked && onDoneChecked(todo.id, !todo.isDone );
        };

        return (
            <div className={`${classes.TodoItem} flex`}>
                <div className="mt-2 mr-1">
                    <CheckBoxField value={todo.isDone} onInput={onCheckDone} />
                </div>
                <div className="flex-grow-1 mt-auto mb-auto">
                    <span className={todo.isDone ? classes.TodoIsDone : ""}>
                        {todo.task}
                    </span>
                </div>
                <Grid2
                    container
                    direction="row"
                    sx={{
                        justifyContent: "flex-start",
                        alignItems: "center",
                    }}
                >
                    <Button onClick={onClickEdit} transparent>
                        <EditIcon />
                    </Button>

                    <Button onClick={onClickDelete} transparent>
                        <DeleteForeverRoundedIcon />
                    </Button>

                </Grid2>

            </div>
        );
    }
);