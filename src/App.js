import React, { Component } from 'react';
import Post from './Post';
import './App.css';
import Home from './Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
  }
  render (){
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
  };
}

export default App;