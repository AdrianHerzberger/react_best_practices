import { dependencies } from "../../dependencies";
import { withDependencies } from "../../hoc/withDependencies"
import WithSideDrawer from "../../hoc/withSideDrawer/withSideDrawer";
import {EditTodoItem} from "./EditTodoItem";

export default WithSideDrawer(withDependencies(EditTodoItem, { 
    todoService: dependencies.TodoService 
}));