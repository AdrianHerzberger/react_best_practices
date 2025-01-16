import { dependencies } from "../../dependencies";
import { WithDependencies } from "../../hoc/withDependencies"
import {EditTodoItem} from "./EditTodoItem";

export default WithDependencies(EditTodoItem, { 
    todoService: dependencies.TodoService 
});