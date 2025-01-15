import { useCallback, useEffect, useState } from "react"
import { TodoItem } from "./TodoItem/TodoItem";
import { Todo } from "../../models/Todo";
import AddTodoItem from "../AddTodoContainer/AddTodoItem";
import { TodoService } from "../../services/Todo.service";

type TodoContainerProps = {
    todoService: TodoService;
}

export const TodoContainer = ({todoService }: TodoContainerProps) => {
    const [todos, setTodos] = useState<Todo[]>([]);

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

    const onEditClicked = (id: number, task: string) => {
        return todoService.editTodo(id, task).then(() => {
            fetchTodos();
        });
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
        </>
    );
};

export default TodoContainer;

