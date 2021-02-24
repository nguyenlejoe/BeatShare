import logo from './logo.svg';
import './App.scss';
import Home from './pages/HomePage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Switch>
      <Route path="/" exact component={Home}/>
      </Switch>
    </Router>
  );
}

export default App;
