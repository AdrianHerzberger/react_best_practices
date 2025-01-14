import React, { useState } from "react"
import { TodoItem } from "./TodoItem/TodoItem";
import { Todo } from "../../models/Todo";
import AddTodoItem from "../AddTodoContainer/AddTodoItem";


type TodoContainerProps = {
    todos?: Todo[];
}

export const TodoContainer = ({
    todos
}: TodoContainerProps) => {
    const [todoList, setTodoList] = useState<Todo[]>([]);

    const onEditClicked = ({ id }: { id: number }) => {
        console.log("Edit clicked for ID:", id);
    }

    const onDeleteClicked = ({ id }: { id: number }) => {
        console.log("Delete clicked for ID:", id);
        setTodoList(todoList.filter(todo => todo.id !== id));
    }

    const onDoneChecked = ({ id, isDone }: { id: number; isDone: boolean }) => {
        console.log("Done toggled for ID:", id, "isDone:", isDone);
        setTodoList(
            todoList.map(todo => (todo.id === id ? { ...todo, isDone } : todo))
        );
    };

    const onAddClicked = (event: string) => {
        console.log(event)
        setTodoList((prevTodos) => [
            ...prevTodos,
        ]);
    }

    return (
        <>
            <AddTodoItem onAddClicked={onAddClicked}/>
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
