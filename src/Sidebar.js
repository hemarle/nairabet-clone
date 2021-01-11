import React from "react";
import "./Sidebar.css";
import Card from "./Card";
import Card2 from "./Card2";
import Sport from "./Sport";
import soccer from "./images/soccer.png";
import tennis from "./images/tennis.png";
import baseball from "./images/icons8-baseball-48.png";
import basketball from "./images/icons8-basketball-48.png";
import golf from "./images/icons8-golf-ball-48.png";
import hockey from "./images/icons8-ice-hockey-48.png";
import handball from "./images/icons8-handball-40.png";
import rugby from "./images/icons8-rugby-football-48.png";
import volleyball from "./images/icons8-volleyball-48.png";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="top">
        <Card />
        <Card2 />
        <Card2 />
      </div>
      <div className="sidebar_options">
        <Sport title="Soccer" number="1031" icon={soccer}></Sport>
        <Sport title="Table Tennis" number="1031" icon={tennis}></Sport>
        <Sport title="BaseBall" number="1031" icon={baseball}></Sport>
        <Sport title="Basket Ball" number="1031" icon={basketball}></Sport>
        <Sport title="Golf" number="1031" icon={golf}></Sport>
        <Sport title="Ice Hockey" number="1031" icon={hockey}></Sport>
        <Sport title="Hand Ball" number="1031" icon={handball}></Sport>
        <Sport title="Rugby" number="1031" icon={rugby}></Sport>
        <Sport title="Volley Ball" number="1031" icon={volleyball}></Sport>
        {/* <Sport title="Soccer" number="1031" icon="ss"></Sport>
        <Sport title="Soccer" number="1031" icon="ss"></Sport>
        <Sport title="Soccer" number="1031" icon="ss"></Sport>
        <Sport title="Soccer" number="1031" icon="ss"></Sport>
        <Sport title="Soccer" number="1031" icon="ss"></Sport>
        <Sport title="Soccer" number="1031" icon="ss"></Sport>
        <Sport title="Soccer" number="1031" icon="ss"></Sport>
        <Sport title="Soccer" number="1031" icon="ss"></Sport>
        <Sport title="Soccer" number="1031" icon="ss"></Sport>
        <Sport title="Soccer" number="1031" icon="ss"></Sport>
        <Sport title="Soccer" number="1031" icon="ss"></Sport>
        <Sport title="Soccer" number="1031" icon="ss"></Sport>
        <Sport title="Soccer" number="1031" icon="ss"></Sport>
        <Sport title="Soccer" number="1031" icon="ss"></Sport> */}
        {/* <Sport title="" number="" icon=""></Sport>
        <Sport title="" number="" icon=""></Sport>
        <Sport title="" number="" icon=""></Sport>
        <Sport title="" number="" icon=""></Sport>
        <Sport title="" number="" icon=""></Sport>
        <Sport title="" number="" icon=""></Sport>
        <Sport title="" number="" icon=""></Sport>
        <Sport title="" number="" icon=""></Sport>
        <Sport title="" number="" icon=""></Sport>
        <Sport title="" number="" icon=""></Sport>
        <Sport title="" number="" icon=""></Sport>
        <Sport title="" number="" icon=""></Sport>
        <Sport title="" number="" icon=""></Sport> */}
      </div>
    </div>
  );
}

export default Sidebar;
