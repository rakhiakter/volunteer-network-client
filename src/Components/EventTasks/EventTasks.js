import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Event from '../Event/Event';
import Header from '../Header/Header';


const EventTasks = () => {
     const [loggedInUser, setLoggedInUser] = useContext(UserContext);
const email = loggedInUser.email;
     const [eventData, setEventData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/getEvent/'+ email)
        .then(res => res.json())
        .then(data =>{
          console.log(data);
          setEventData(data)});
    }, [email])
    return (
      <div>
        <Header></Header>
        <div className="row">
          {eventData.map((task) => (
            <Event key={task.eventName} task={task}></Event>
          ))}
        </div>
      </div>
    );
};

export default EventTasks;