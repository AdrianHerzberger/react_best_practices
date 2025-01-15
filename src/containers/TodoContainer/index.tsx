import { useMemo } from "react";
import { HttpAdapter } from "../../adapters/HttpAdapter";
import { TodoService } from "../../services/Todo.service";
import { TodoContainer } from "./TodoContainer";

const WithDependenciesOfTodoService = (Component: any) => {
    const WithDependenciesOfTodoServiceComponent = (props: any) => {
        const httpAdapter = useMemo(() => new HttpAdapter({ baseUrl: "http://localhost:3001" }), []);
        const todoService = useMemo(() => new TodoService(httpAdapter), [httpAdapter]);
        return <Component {...props} todoService={todoService} />;
    };

    return WithDependenciesOfTodoServiceComponent;
};

export const TodoContainerDependenciesOfTodoService =
    WithDependenciesOfTodoService(TodoContainer);