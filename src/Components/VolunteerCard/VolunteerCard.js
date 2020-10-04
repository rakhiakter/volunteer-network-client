import React from 'react';

import './VolunteerCard.css';
const VolunteerCard= ({task}) => {
    return (
      <div className="col-md-3">
          <img
            style={{
              
              height: "320px",
              width: "270px",
              left: "735px",
              top: "1044px",
              background: "url(.jpg), #C4C4C4",
              borderRadius: "10px"
            }}
            src={require(`../../images/${task.pic}`)}
            alt=""
          />
          <h3 style={{backgroundColor: "#" + task.color}}>{task.name}</h3>

      </div>
    );
};

export default VolunteerCard;