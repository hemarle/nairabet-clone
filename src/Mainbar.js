import React from "react";
import "./Mainbar.css";
import requests from "./requests.js";
import Content from "./Content";
import "bootstrap/dist/css/bootstrap.min.css";

function Mainbar() {
  return (
    <div className="mainbar">
      <div className="mainbar_image">
        <img src="https://www.nairabet.com/static/images/cms/MediaCenter/FA%20Cup.jpg" />
      </div>

      <div className="mainbar_card">
        <div class="card">
          <ul class="list-group list-group-flush">
            <li class="list-group-item mainbar_best">Best Seller</li>
            <li class="list-group-item">
              <div className="mainbar_sports">
                <div>Soccer</div>
                <div>Tennis</div>
                <div>Icehockey</div>
                <div>Handball</div>
                <div>Volleyball</div>
                <div>Table Tennis</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="mainbar_title">
        <Content
          league=" Premier League"
          url={requests.football.epl}
          country=" England"
        />
        <Content
          league="League 1"
          url={requests.football.eflleague}
          country="England"
        />
        <Content
          league="League 2"
          url={requests.football.eflleague2}
          country="England"
        />
        <Content league="FA CUP" url={requests.football.fa} country="England" />
        <Content
          league="League 1"
          url={requests.football.france}
          country="FRANCE"
        />
      </div>
    </div>
  );
}

export default Mainbar;
