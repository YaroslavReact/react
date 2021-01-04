import React, { Component } from 'react';
import Post from './Post';
import './App.css';
import Home from './Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App(props){
    return(  
           <Router>
            <Switch>
             <Route id="post" path={"/posts/:id"} >
               <Post />
              </Route>
              <Route path="/">
               <Home />
              </Route> 
            </Switch>
          </Router> 
    )
}

export default App;