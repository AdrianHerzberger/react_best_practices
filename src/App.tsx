import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import Header from './partials/Header/Header';
import TodoContainer from './containers/TodoContainer';
import { AppStateProvider } from './hooks/useAppState';

const App = () => {

  return (
    <Router>
      <Header />
      <AppStateProvider >
        <TodoContainer />
      </AppStateProvider>
    </Router>
  );
};

export default App;
