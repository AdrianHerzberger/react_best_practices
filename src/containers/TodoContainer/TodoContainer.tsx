import { useCallback, useEffect, useState } from "react"
import { TodoItem } from "./TodoItem/TodoItem";
import { Todo } from "../../models/Todo";
import AddTodoItem from "../AddTodoContainer/AddTodoItem";
import { TodoService } from "../../services/Todo.service";
import { EditTodoItem } from "../EditTodoContainer/EditTodoItem";
import { ButtonSelect } from "../../components/ButtonSelect/ButtonSelect";
import { Box } from "@mui/material";
import { useAppState } from "../../hooks/useAppState";



type TodoContainerProps = {
    todoService: TodoService;
}

const BUTTONSELECTOPTIONS = [
    { label: "All", value: "all" },
    { label: "Done", value: "true" },
    { label: "Not done", value: "false" }
];

export const TodoContainer = (
    {
        todoService,
    }: TodoContainerProps) => {
    const { appState, setAppState } = useAppState();
    const [todos, setTodos] = useState<Todo[]>([]);
    const [todoStateFilter, setTodoStateFilter] = useState<string>("all");

    const fetchTodos = useCallback(() => {
        return todoService.getAllTodos().then((todos: Todo[]) => {
            setTodos(todos);
        });
    }, [todoService]);

    useEffect(() => {
        if (appState.editTodoId === -1) {
            fetchTodos();
        }
    }, [appState.editTodoId, fetchTodos]);

    const onAddClicked = (task: string) => {
        return todoService.addTodo(task).then(() => {
            fetchTodos();
        });
    };

    const onEditClicked = (todoId: number) => {
        setAppState({ editTodoId: todoId, isDrawerOpen: true })
    };

    const onDeleteClicked = (todoId: number) => {
        return todoService.deleteTodo(todoId).then(() => {
            fetchTodos();
        });
    };

    const onDoneChecked = (id: number, isDone: boolean) => {
        return todoService.updateTodo(id, { isDone }).then(() => {
            fetchTodos();
        });
    };

    const onSelectTodoStateFilter = useCallback((value: string) => {
        setTodoStateFilter(value);
        return todoService.getAllTodos({ query: { isDone: value } }).then((todos: Todo[]) => {
            setTodos(todos);
        });
    }, [todoService]);

    return (
        <>
            <AddTodoItem onAddClicked={onAddClicked} />
            <Box sx={{
                m: 2,

            }}>
                <ButtonSelect
                    value={todoStateFilter}
                    onInput={onSelectTodoStateFilter}
                    options={BUTTONSELECTOPTIONS}
                />
            </Box>
            {todos?.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onEditClicked={onEditClicked}
                    onDeleteClicked={onDeleteClicked}
                    onDoneChecked={onDoneChecked}
                />
            ))}
            {appState.editTodoId === -1 ? null :
                <EditTodoItem
                    todoService={todoService}
                />
            }
        </>
    );
};

export default TodoContainer;

