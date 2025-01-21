import { dependencies } from "../../dependencies";
import { withDependencies as withDependency } from "../../hoc/withDependencies";
import {AboutContainer} from "./AboutContainer";


export default withDependency(AboutContainer, {
    todoService: dependencies.TodoService,
});