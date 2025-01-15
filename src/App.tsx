import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import Header from './partials/Header/Header';
import { TodoContainerDependenciesOfTodoService } from './containers/TodoContainer';


const App = () => {
  return (
    <Router>
      <Header />
      <TodoContainerDependenciesOfTodoService />
    </Router>
  );
};

export default App;
