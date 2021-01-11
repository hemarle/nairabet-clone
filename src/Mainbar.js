import React from "react";
import "./Mainbar.css";
import requests from "./requests.js";
import Content from "./Content";
import "bootstrap/dist/css/bootstrap.min.css";

function Mainbar() {
  return (
    <div className="mainbar">
      <div className="mainbar_image">
        <div>
          <div
            id="carouselExampleIndicators"
            class="carousel slide"
            data-ride="carousel"
            data-interval="3000"
          >
            <ol class="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                class="active"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="1"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="2"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="3"
              ></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  class="d-block w-100"
                  src="https://www.nairabet.com/static/images/cms/MediaCenter/FA%20Cup.jpg"
                  alt="First slide"
                />
              </div>
              <div class="carousel-item">
                <img
                  class="d-block w-100"
                  src="https://www.nairabet.com/static/images/cms/MediaCenter/GoallessDr.jpg"
                  alt="Second slide"
                />
              </div>
              <div class="carousel-item">
                <img
                  class="d-block w-100"
                  src="https://www.nairabet.com/static/images/cms/MediaCenter/Goldenrace.jpg"
                  alt="Third slide"
                />
              </div>
              <div class="carousel-item">
                <img
                  class="d-block w-100"
                  src="https://www.nairabet.com/static/images/cms/MediaCenter/CCare.jpg"
                  alt="Fourth slide"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mainbar_card">
        <div class="card">
          <ul class="list-group list-group-flush">
            <li class="list-group-item mainbar_best">Best Seller</li>
            <li class="list-group-item">
              <div className="mainbar_sports">
                <a href="#">Soccer</a>
                <a href="#">Tennis</a>
                <a href="#">Icehockey</a>
                <a href="#">Handball</a>
                <a href="#">Volleyball</a>
                <a href="#">Table Tennis</a>
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
