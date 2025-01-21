import './App.css';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from './partials/Header/Header';
import TodoContainer from './containers/TodoContainer';
import { AppStateProvider } from './hooks/useAppState';
import TodoStatesContainer from './containers/TodoStatesContainer';
import AboutContainer from './containers/AboutContainer';


const App = () => {
 /*  const [location, setLocation] = useState(window.location.pathname);

  useEffect(() => {
    document.querySelectorAll('a').forEach((el) => {
      el.addEventListener('click', (event) => {
        event.preventDefault();
        const link = (event.target as HTMLAnchorElement).href
        if (window.history.state.pathLink !== link) {
          window.history.pushState({ pathLink: link }, "", link);
          setLocation(window.location.pathname);
        }
      });
    });

    window.addEventListener('popstate', (event) => {
      setLocation((event.target as Window).location.pathname);
    });
  }); */

  return (
    <AppStateProvider>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<TodoContainer />} />
          <Route path='/stats' element={<TodoStatesContainer />} />
          <Route path='/about' element={<AboutContainer />} />
        </Routes>
      </Router>
    </AppStateProvider>
  );
};

export default App;
