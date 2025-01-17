import { HttpAdapter } from "../adapters/HttpAdapter";
import { Todo } from "../models/Todo";

export class TodoService {
    private readonly http: HttpAdapter;

    constructor(httpAdapter: HttpAdapter) {
        this.http = httpAdapter;
    }

    getTodo = (id: number) => {  
        return this.http.get<Todo>(`/todos/${id}`);
    }

    getAllTodos(params?: {query: {isDone : string}}): Promise<Todo[]> {
        return this.http.get<Todo[]>("/todos", params)
    }

    addTodo = (task: string) => {
        return this.http.post("/todos", {todo: task})
    }

    updateTodo = (id: number, data: Partial<Todo>) => {
        return this.http.patch<Partial<Todo>>(`/todos/${id}`, { ...data });
    }

    deleteTodo = (todoId: number) => {
        return this.http.delete("/todos", {id: todoId})
    }
}
