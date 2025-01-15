import { dependencies } from "../../dependencies";
import { WithDependencies as withDependency } from "../../hoc/withDependencies";
import TodoContainer from "./TodoContainer";

export default withDependency(TodoContainer, {
    todoService: dependencies.TodoService,
});