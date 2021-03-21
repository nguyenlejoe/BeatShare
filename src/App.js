import React, {useState, useEffect} from "react";
import './App.scss';
import Home from './pages/HomePage';
import Account from './pages/AccountPage';
import EditAccount from './pages/EditAccount';
import Post from './pages/PostPage';
import Start from './pages/StartPage';
import Login from './pages/LoginPage';
import SignUp from './pages/SignupPage';
import PostComments from './pages/ViewPostComments';
import Information from './pages/Signup-InfoPage';
import ManagePost from './pages/ManagePostPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { AnimatePresence, motion } from 'framer-motion';
import axios from 'axios';



function App() {

  const token = sessionStorage.getItem("token");
    if(token){
        axios.defaults.headers.common['Authorization'] = "Bearer " + token;
    }


  return (

    <div className="App">
      <Router>
        <AnimatePresence>
            <Switch>
            <Route path="/" exact component={Start}/>
            <Route path="/LoginPage" exact component={Login}/>
            <Route path="/SignupPage" exact component={SignUp}/>
            <Route path="/Signup-InfoPage" exact component={Information}/>
            {/* Logged In */}
            <Route path="/HomePage" exact component={Home}/>
            <Route exact path="/user/:id"> 
            <Account />
            </Route>
            <Route exact path="/AccountPage"> 
            <Account />
            </Route>
            <Route path="/ManagePostPage" exact component={ManagePost}/>
            <Route path="/EditAccount" exact component={EditAccount}/>
            <Route path="/PostPage" exact component={Post}/>
            <Route exact path="/Post/Comments/:id">
              <PostComments/>
            </Route>
            </Switch>
        </AnimatePresence>

      </Router>
    </div>
  );
}

export default App;
