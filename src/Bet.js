import React from "react";
import "./Bet.css";
function Bet({ title, image }) {
  return (
    <div className="better">
      <div id="accordion">
        <div class="card">
          <div class="card-header bet" id="headingOne">
            <h5 class="mb-0">
              <div
                class=" bets"
                data-toggle="collapse"
                data-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                {title}
              </div>
            </h5>
          </div>

          <div
            id="collapseOne"
            class="collapse show"
            aria-labelledby="headingOne"
            data-parent="#accordion"
          >
            <div class="card-body bet-card">
              <img class="bet-image" src={image}></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bet;
