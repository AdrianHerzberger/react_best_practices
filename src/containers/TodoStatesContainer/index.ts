import { dependencies } from "../../dependencies";
import { withDependencies as withDependency } from "../../hoc/withDependencies";
import TodoStatesContainer from "./TodoStatesContainer";


export default withDependency(TodoStatesContainer, {
    todoService: dependencies.TodoService,
});