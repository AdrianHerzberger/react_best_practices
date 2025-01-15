import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import Header from './partials/Header/Header';
import TodoContainer from './containers/TodoContainer';


const App = () => {
  return (
    <Router>
      <Header />
      <TodoContainer />
    </Router>
  );
};

export default App;
