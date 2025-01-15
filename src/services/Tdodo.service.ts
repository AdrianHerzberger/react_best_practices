import { Todo } from "../models/Todo";

export class TodoService {
    getAllTodos(): Promise<Todo[]> {
        return fetch("http://localhost:3001/todos")
            .then(response => response.json())
            .then(data => data as Todo[]);
    }

    addTodo = async (task: string) => {
        return fetch("http://localhost:3001/todos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ todo: task, isDone: false })
        }).then((response) => {
            response.json();
        });;
    }

    deleteTodo = async (id: number) => {
        return fetch("http://localhost:3001/todos", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ id: id})
        }).then((response) => {
            response.json();
        });;    
    }

}
