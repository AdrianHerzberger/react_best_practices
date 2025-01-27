import { Box, Grid2, Typography } from "@mui/material";
import TextField from "../../components/TextField/TextField";
import TextAreaField from "../../components/TextAreaField/TextAreaField";
import CheckBoxField from "../../components/CheckBoxField/CheckBoxField";
import Button from "../../components/Button/Button";
import CanvasField from "../../components/CanvasField/CanvasField";
import { useCallback, useEffect, useState } from "react";
import { TodoService } from "../../services/Todo.service";
import classes from "./EditTodoItem.module.scss"
import { useAppState } from "../../hooks/useAppState";


type EditTodoItemProps = {
  todoService?: TodoService;
};

type TodoState = {
  task?: string;
  description?: string;
  handNotes?: string;
  isDone?: boolean;
};

export const EditTodoItem = (
  {
    todoService,
  }: EditTodoItemProps) => {
  const { appState, setAppState } = useAppState();
  const [editTodo, setEditTodo] = useState<TodoState | null>({
    task: "",
    description: "",
    handNotes: "",
    isDone: false
  });

  const getTodos = useCallback(() => {
    todoService?.getTodo(appState.editTodoId).then((todo) => {
      setEditTodo(todo);
    });
  },[appState.editTodoId, todoService])

  useEffect(() => {
    getTodos();
  }, [getTodos]);

  const onFormChanges = (updateTodo: Partial<TodoState>) => {
    setEditTodo((currentState) => ({
      ...currentState,
      ...updateTodo,
    }));
  }

  const onButtonSaveClicked = useCallback(() => {
    if (editTodo) {
      todoService?.updateTodo(appState.editTodoId, editTodo).then(() => {
        setAppState({ editTodoId: -1, isDrawerOpen: false });
      });
    }
  }, [appState.editTodoId, editTodo, setAppState, todoService]);


  const onButtonCancelClicked = () => {
    setAppState({ editTodoId: -1, isDrawerOpen: false });
  };

  return (
    <Grid2 className={classes.EditTodoContainer}>
      <Typography variant="h6">Edit Todo</Typography>
      <Box sx={{ py: 2, display: 'grid', gap: 2, alignItems: 'center', flexWrap: 'wrap' }}>
        <TextField
          name="Task"
          label="Task"
          value={editTodo?.task}
          onInput={(value) => onFormChanges({ task: value })}
        />
        <CheckBoxField
          label="is Done"
          value={editTodo?.isDone}
          onInput={(value) => onFormChanges({ isDone: value })}
        />
        <TextAreaField
          name="description"
          label="Description"
          value={editTodo?.description}
          placeholder="Type something"
          onInput={(value) => onFormChanges({ description: value })}
        />
        <CanvasField
          label="Hand Notes"
          value={editTodo?.handNotes}
          onInput={(value) => onFormChanges({ handNotes: value })}
        />
      </Box>
      <Box>
        <Button primary onClick={onButtonSaveClicked}>Save</Button>
        <Button secondary onClick={onButtonCancelClicked}>Cancel</Button>
      </Box>
    </Grid2>
  )
};

export default EditTodoItem;
