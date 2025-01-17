import { Box, Grid2, Typography } from "@mui/material";
import TextField from "../../components/TextField/TextField";
import TextAreaField from "../../components/TextAreaField/TextAreaField";
import CheckBoxField from "../../components/CheckBoxField/CheckBoxField";
import Button from "../../components/Button/Button";
import CanvasField from "../../components/CanvasField/CanvasField";
import { useCallback, useEffect, useState } from "react";
import { TodoService } from "../../services/Todo.service";
import classes from "./EditTodoItem.module.scss"

type EditTodoItemProps = {
  todoId: number;
  onSaveClicked?: () => void;
  onCancelClicked?: () => void;
  todoService: TodoService;
};

type TodoState = {
  task?: string;
  description?: string;
  handNotes?: string;
  isDone?: boolean;
};

export const EditTodoItem = ({
  todoId,
  onSaveClicked,
  onCancelClicked,
  todoService,
}: EditTodoItemProps) => {

  const [editTodo, setEditTodo] = useState<TodoState | null>({
    task: "",
    description: "",
    handNotes: "",
    isDone: false
  });

  useEffect(() => {
    todoService.getTodo(todoId).then((todo) => {
      setEditTodo(todo);
    });
  }, [todoId, todoService]);

  const onFormChanges = useCallback((updateTodo: Partial<TodoState>) => {
    setEditTodo((currentState) => ({
      ...currentState,
      ...updateTodo,
    }));
  }, []);

  const handleSave = () => {
    if (editTodo) {
      todoService.updateTodo(todoId, editTodo).then(() => {
        onSaveClicked && onSaveClicked();
      });
    }
  };

  const onButtonSaveClicked = () => {
    handleSave();
  };

  const onButtonCancelClicked = () => {
    onCancelClicked && onCancelClicked();
  };

  return (
    <Grid2 className={classes.EditTodoContainer}>
      <Typography variant="h6">Edit Todo</Typography>
      <Box sx={{ py: 2, display: 'grid', gap: 2, alignItems: 'center', flexWrap: 'wrap' }}>
        <TextField
          name="Task"
          label="Task"
          value={editTodo?.task}
          onInput={(value) => onFormChanges({task: value})}
        />
        <CheckBoxField
          label="is Done"
          value={editTodo?.isDone}
          onInput={(value) => onFormChanges({isDone: value})}
        />
        <TextAreaField
          name="description"
          label="Description"
          value={editTodo?.description}
          placeholder="Type something"
          onInput={(value) => onFormChanges({description: value})}
        />
        <CanvasField
          label="Hand Notes"
          value={editTodo?.handNotes}
          onInput={(value) => onFormChanges({handNotes: value})}
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
