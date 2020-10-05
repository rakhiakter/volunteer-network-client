import React from 'react';
import { Link } from 'react-router-dom';

import './VolunteerCard.css';
const VolunteerCard= ({task}) => {
  console.log(task);
    return (
      <div className="col-md-3">
          <Link
            to={{
            pathname:"/createAccount/" + task.eventName,
              state: {...task }
            }}
          >
          
          <img
            style={{
              height: "320px",
              width: "270px",
              left: "735px",
              top: "1044px",
              background: "url(.jpg), #C4C4C4",
              borderRadius: "10px",
            }}
            src={require(`../../images/${task.pic}`)}
            alt=""
          />
          <h4
            style={{
              backgroundColor: task.color,
              width: "270px",
              height: "90px",
              borderRadius: "10px",
              textAlign: "center",
              padding: "5px",
              color: "white",
              fontFamily:" Montserrat",
              fontStyle: "normal",
              fontWeight: "600"
             
            }}
          >
            {task.eventName}
          </h4>
        </Link>
      </div>
    );
};

export default VolunteerCard;