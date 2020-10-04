import React from 'react';
import { Link } from 'react-router-dom';

import './VolunteerCard.css';
const VolunteerCard= ({task}) => {
  console.log(task);
    return (
      <div className="col-md-3">
        <Link to={"/createAccount/"+task.name}>
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
          <h3
            style={{
              backgroundColor: task.color,
              width: "270px",
              height: "80px",
              borderRadius: "10px",
              textAlign: "center",
              padding: "20px",
              color: "white",
            }}
          >
            {task.name}
          </h3>
        </Link>
      </div>
    );
};

export default VolunteerCard;