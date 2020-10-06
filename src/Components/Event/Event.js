import React from 'react';
import {  Image } from "react-bootstrap";
import "./Event.css"
const Event = (props) => {
    const cancelEventTasks = (e,id) => {
      e.persist();
        fetch(`https://volunteer-network-1.herokuapp.com/delete/${id}`, {
          method: `DELETE`,
        })
          .then((res) => res.json())
          .then((result) => {
            if (result) {
              console.log("deleted successfully");
              e.target.parentNode.parentNode.parentNode.style.display = "none";
            }
          });
    };
    const activity = { pic: "extraVolunteer.png" };
    const {eventName, date, pic,_id} = props.task;
    console.log(eventName, date, pic );
    console.log(props);
    return (
      <div className="col-md-6" id="task">
        <div className="row">
          <div className="col-md-4">
            {pic && <Image src={require(`../../images/${pic}`)} fluid />}
          </div>
          <div className="col-md-4">
            <h3>
              <b>{eventName}</b>
            </h3>
            <p>
              <b>{date}</b>
            </p>
            <button onClick={(e)=>cancelEventTasks(e,_id)}>Cancel</button>
          </div>
        </div>
      </div>
    );
};

export default Event;