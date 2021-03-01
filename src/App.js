import React, {useState, useEffect} from "react";
import logo from './logo.svg';
import './App.scss';
import Home from './pages/HomePage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import jwtDecode from "jwt-decode";
import useLocalStorage from "react-use-localstorage";


function App() {

  const [token, setToken] = useLocalStorage("token");
  const [user, setUser] = useState();

  useEffect(() => {
    const user = token ? jwtDecode(token) : null;
    setUser(user);
  }, [token]);


  return (
    <Router>
      <Switch>
      <Route path="/" exact component={Home}/>
      </Switch>
    </Router>
  );
}

export default App;
