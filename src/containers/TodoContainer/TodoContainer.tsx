import { useCallback, useEffect, useState } from "react"
import { TodoItem } from "./TodoItem/TodoItem";
import { Todo } from "../../models/Todo";
import AddTodoItem from "../AddTodoContainer/AddTodoItem";
import { TodoService } from "../../services/Todo.service";
import {EditTodoItem} from "../EditTodoContainer/EditTodoItem";

type TodoContainerProps = {
    todoService: TodoService;
}

export const TodoContainer = (
    {
        todoService,
    }: TodoContainerProps) => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [selectedTodo, setSelectedTodo] = useState<number>(-1);

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
        setTodos(
            todos.map(todo => (todo.id === id ? { ...todo, isDone } : todo))
        );
    };

    const onCloseDrawer = () => {
        setSelectedTodo(-1);
    }

    return (
        <>
            <AddTodoItem onAddClicked={onAddClicked} />
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

