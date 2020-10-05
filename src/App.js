import React ,{createContext, useState}from 'react';
import './App.css';
import Home from './Components/Home/Home';
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from './Components/Login/Login';
import EventTasks from './Components/EventTasks/EventTasks';
import Admin from './Components/Admin/Admin';
import AdminCreateTask from './Components/AdminCreateTtask/AdminCreateTask';
import CreateAccount from './Components/CreateAccount/CreateAccount';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();


 
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/login" component={Login}/>
            
        
          <PrivateRoute path="/createAccount/:event" component={CreateAccount}/>
           
          
          <Route path="/eventTasks" component={EventTasks}/>
            
         
          <Route path="/admin" component={Admin}/>

          <Route path="/adminCreateTask" component={AdminCreateTask}/>

        </Switch>
      </Router>
      </UserContext.Provider>
    
  );
}

export default App;
