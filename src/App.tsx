import React from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import Header from './partials/Header/Header';
import TodoContainer from './containers/TodoContainer/TodoContainer';
import { Todo } from './models/Todo';

const initialTodos: Todo[] = [
  { id: 1, task: "Learn React", isDone: false },
  { id: 2, task: "Build a Todo App", isDone: false },
];

const App = () => {
  return (
    <Router> 
      <Header />
      <TodoContainer todos={initialTodos}/>
    </Router>
  );
};

export default App;
