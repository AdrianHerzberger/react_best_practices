import { useCallback, useEffect, useState } from "react"
import { TodoItem } from "./TodoItem/TodoItem";
import { Todo } from "../../models/Todo";
import AddTodoItem from "../AddTodoContainer/AddTodoItem";
import { TodoService } from "../../services/Todo.service";
import { EditTodoItem } from "../EditTodoContainer/EditTodoItem";
import { ButtonSelect } from "../../components/ButtonSelect/ButtonSelect";
import { Box } from "@mui/material";


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
    const [todos, setTodos] = useState<Todo[]>([]);
    const [selectedTodo, setSelectedTodo] = useState<number>(-1);
    const [todoStateFilter, setTodoStateFilter] = useState<string>("all");

    const fetchTodos = useCallback(() => {
        return todoService.getAllTodos().then((todos: Todo[]) => {
            setTodos(todos);
        });
    }, [todoService]);

    useEffect(() => {
        fetchTodos();
    }, [fetchTodos]);

    const onAddClicked = (task: string) => {
        return todoService.addTodo(task).then(() => {
            fetchTodos();
        });
    };

    const onEditClicked = (id: number) => {
        setSelectedTodo(id);
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
        return todoService.getAllTodos({query: {isDone: value}}).then((todos : Todo[]) => {
            setTodos(todos);
        });
    },[todoService]);

    const onCloseDrawer = () => {
        setSelectedTodo(-1);
    }

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
            {selectedTodo !== -1 ?
                <EditTodoItem
                    todoId={selectedTodo}
                    onCancelClicked={onCloseDrawer}
                    onSaveClicked={() => {
                        setSelectedTodo(-1);
                        fetchTodos();
                    }}
                    todoService={todoService}
                />
                : null
            }
        </>
    );
};

export default TodoContainer;

