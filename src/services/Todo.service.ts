import { HttpAdapter } from "../adapters/HttpAdapter";
import { Todo } from "../models/Todo";

export class TodoService {
    private readonly http: HttpAdapter;

    constructor(httpAdapter: HttpAdapter) {
        this.http = httpAdapter;
    }

    getAllTodos(): Promise<Todo[]> {
        return this.http.get<Todo[]>("/todos")
    }

    addTodo = (task: string) => {
        return this.http.post("/todos", {todo: task})
    }

    editTodo = (id: number, task: string) => {
        return this.http.put(`/todos/${id}`, {todo: task})
    }

    deleteTodo = (todoId: number) => {
        return this.http.delete("/todos", {id: todoId})
    }
}
