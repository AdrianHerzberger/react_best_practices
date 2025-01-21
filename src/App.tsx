import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from './partials/Header/Header';
import TodoContainer from './containers/TodoContainer';
import TodoStatesContainer from './containers/TodoStatesContainer';
import AboutContainer from './containers/AboutContainer';
import { AppStateProvider } from './hooks/useAppState';
import withAsync from './hoc/withAsync';
import withSuspense from './hoc/withSuspense';
import { PageLayout } from './components/PageLayout/PageLayout';

const SuspenseTodoContainer = withSuspense(
  () => import("./containers/TodoContainer")
);

const SuspenseTodoStatsContainer = withSuspense(
  () => import("./containers/TodoStatesContainer")
);

const SuspenseAboutContainer = withSuspense(
  () => import("./containers/AboutContainer")
);

const App = () => {
  return (
    <AppStateProvider>
      <Router>
        <Header />
        <PageLayout>
          <Routes>
            <Route path='/' element={SuspenseTodoContainer} />
            <Route path='/stats' element={SuspenseTodoStatsContainer} />
            <Route path='/about' element={SuspenseAboutContainer} />
          </Routes>
        </PageLayout>
      </Router>

    </AppStateProvider >
  );
};

export default App;
