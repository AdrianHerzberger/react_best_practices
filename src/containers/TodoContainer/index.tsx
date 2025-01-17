import { dependencies } from "../../dependencies";
import { withDependencies as withDependency } from "../../hoc/withDependencies";
import TodoContainer from "./TodoContainer";

export default withDependency(TodoContainer, {
    todoService: dependencies.TodoService,
});