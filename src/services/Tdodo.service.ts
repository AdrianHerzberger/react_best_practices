import { HttpAdapter } from "../adapters/HttpAdapter";
import { Todo } from "../models/Todo";

export class TodoService {
    private readonly http: HttpAdapter;

    constructor() {
        this.http = new HttpAdapter({ baseUrl: "http://localhost:3001" });
    }

    getAllTodos(): Promise<Todo[]> {
        return this.http.get<Todo[]>("/todos")
    }

    addTodo = (task: string) => {
        return this.http.post("/todos", {todo: task})
    }

    editTodo = (id: number, task: string) => {
        return this.http.put("/todo", {id, task})
    }

    deleteTodo = (todoId: number) => {
        return this.http.delete("/todo", {id: todoId})
    }
}
