import React, { useCallback, useEffect, useState } from "react"
import classes from "./TodoStatesContainer.module.scss"
import { Grid2, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import TaskAltRoundedIcon from '@mui/icons-material/TaskAltRounded';
import AssignmentLateRoundedIcon from '@mui/icons-material/AssignmentLateRounded';
import { TodoService } from "../../services/Todo.service";
import { Todo } from "../../models/Todo";

type TodoStatesContainerProps = {
  todoService: TodoService;
}


export const TodoStatesContainer = ({
  todoService
}: TodoStatesContainerProps) => {

  const [todos, setTodos] = useState<Todo[]>([]);

  const fetchTodos = useCallback(() => {
    return todoService.getAllTodos().then((todos: Todo[]) => {
      console.log(todos);
      setTodos(todos);
    });
  }, [todoService]);

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos, todoService]);

  const todoDone = todos.filter(({ isDone }) => isDone);
  const todoNotDone = todos.filter(({ isDone }) => !isDone);

  return (
    <div className={classes.StatsBoard}>
      <Typography variant="h5">Stats</Typography>
      <Grid2>
        <List>
          <ListItem>
            <ListItemIcon>
              <AssignmentLateRoundedIcon />
              {todoNotDone.length}
            </ListItemIcon>
            <ListItemText primary="Not Done" />
            {todoNotDone.map((todo) => (
              <ListItemText  key={todo.id}>{todo.task.toString()}</ListItemText >
            ))}
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <TaskAltRoundedIcon />
              {todoDone.length}
            </ListItemIcon>
            <ListItemText primary="Done" />
            {todoDone.map((todo) => (
              <ListItemText  key={todo.id}>{todo.task.toString()}</ListItemText >
            ))}
          </ListItem>
        </List>

      </Grid2>
    </div>
  )
};

export default TodoStatesContainer;
