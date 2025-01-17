import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import Header from './partials/Header/Header';
import TodoContainer from './containers/TodoContainer';
import { createContext, Dispatch, useState } from 'react';
import EditTodoItem from './containers/EditTodoContainer/EditTodoItem';

type AppStateType = {
  appState: {
    editTodoId: number
  }
  setAppState: Dispatch<React.SetStateAction<{editTodoId: number}>>;
};

export const AppState = createContext<AppStateType>({
  appState: {editTodoId: -1},
  setAppState: () => {},
});

const App = () => {

  const [appState, setAppState] = useState({
    editTodoId: -1,

  });

  return (
    <Router>
      <Header />
      <AppState.Provider value={{ appState, setAppState }}>
        <TodoContainer />
      </AppState.Provider>
    </Router>
  );
};

export default App;
