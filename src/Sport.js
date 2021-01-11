import React from "react";
import "./Sport.css";

function Sport({ title, icon, number }) {
  return (
    <div className="sport">
      <div className="sport-icon">
        <img src={icon} alt="aa" />
      </div>
      <div className="sport-title">{title}</div>
      <div className="sport-number">{number}</div>
    </div>
  );
}

export default Sport;
