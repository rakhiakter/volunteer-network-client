import React from 'react';
import {  Image } from "react-bootstrap";
import "./Event.css"
const Event = (props) => {
    const cancelEventTasks = () => {};
    const activity = { pic: "extraVolunteer.png" };
    return (
      
        <div className="col-md-6" id="task">
          <div className="row">
            <div className="col-md-4">
              <Image src={require("../../images/extraVolunteer.png")} fluid />
            </div>
            <div className="col-md-4">
              <h2>
                <b>Humanity More</b>
              </h2>
              <p>
                <b>Date</b>
              </p>
              <button onClick={cancelEventTasks}>Cancel</button>
            </div>
          </div>
        </div>
      
    );
};

export default Event;