import React from 'react';
import './App.css';
import Home from './Components/Home/Home';
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from './Components/Login/Login';
import EventTasks from './Components/EventTasks/EventTasks';
import Admin from './Components/Admin/Admin';
import AdminCreateTask from './Components/AdminCreateTtask/AdminCreateTask';
import CreateAccount from './Components/CreateAccount/CreateAccount';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
 firebase.initializeApp(firebaseConfig)

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/login" component={Login}/>
            
        
          <Route path="/createAccount/:event" component={CreateAccount}/>
           
          
          <Route path="/eventTask" component={EventTasks}/>
            
         
          <Route path="/admin" component={Admin}/>

          <Route path="/adminCreateTask" component={AdminCreateTask}/>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
