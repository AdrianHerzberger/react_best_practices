import { HttpAdapter } from "./adapters/HttpAdapter";
import { TodoService } from "./services/Todo.service";

class DependencyContainer {
    public static _dependencies: any = {};

    public static add<T>(key: symbol, value: T): void {
        DependencyContainer._dependencies[key] = value;
    }

    public static get<T>(key: symbol): T {
        return DependencyContainer._dependencies[key];
    }
}

const httpAdapter = new HttpAdapter({ baseUrl: "http://localhost:3001" });
const todoService = new TodoService(httpAdapter);

const dependencies = {
    TodoService: Symbol('DITodoService'),
}

const container = DependencyContainer;
container.add(dependencies.TodoService, todoService);

export { container, dependencies };




