import React from "react";
import "./Title.css";

function Title() {
  return (
    <div className="title">
      <h1>Marle Bookmaker</h1>

      <div className="title_link">
        <a href="#"> Sports</a>
        <a href="#"> In Play</a>
        <a href="#"> Casino</a>
        <a href="#"> Virtuals</a>
        <a href="#"> Golden Race</a>
      </div>
    </div>
  );
}

export default Title;
