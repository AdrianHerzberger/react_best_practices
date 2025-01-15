import { useEffect, useState } from "react"
import { TodoItem } from "./TodoItem/TodoItem";
import { Todo } from "../../models/Todo";
import AddTodoItem from "../AddTodoContainer/AddTodoItem";


export const TodoContainer = () => {
    const [todos, setTodos] = useState<Todo[]>([]);

    useEffect(() => {
        fetch("http://localhost:3001/todos").then((response) => {
            response.json().then((toDoData) => {
                setTodos(toDoData);
            });
        });
    }, []);

    const onEditClicked = ({ id }: { id: number }) => {
        console.log("Edit clicked for ID:", id);
    }

    const onDeleteClicked = ({ id }: { id: number }) => {
        console.log("Delete clicked for ID:", id);
        setTodos(todos.filter(todo => todo.id !== id));
    }

    const onDoneChecked = ({ id, isDone }: { id: number; isDone: boolean }) => {
        console.log("Done toggled for ID:", id, "isDone:", isDone);
        setTodos(
            todos.map(todo => (todo.id === id ? { ...todo, isDone } : todo))
        );
    };

    const onAddClicked = (task: string) => {
        console.log(task)
        setTodos((prevTodos) => [
            ...prevTodos,
            { id: prevTodos.length + 1, task, isDone: false }
        ]);
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
        </>
    )
};

export default TodoContainer;
