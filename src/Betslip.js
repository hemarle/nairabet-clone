import React from "react";
import "./Betslip.css";

function Betslip({ title, no }) {
  return (
    <div className="betslip">
      <div id="accordion">
        <div class="card">
          <div class="card-header bet" id={`headingTwo${no}`}>
            <h5 class="mb-0">
              <div
                class=" bets"
                data-toggle="collapse"
                data-target={`#collapse${no}`}
                aria-expanded="true"
                aria-controls={`collapse${no}`}
              >
                {title}
              </div>
            </h5>
          </div>

          <div
            id={`collapse${no}`}
            class="collapse show"
            aria-labelledby={`heading${no}`}
            data-parent="#accordion"
          >
            <div class="card-body bet-card">
              <div className="search">
                <input
                  type="search"
                  id="search"
                  className="betslip-search"
                ></input>{" "}
                <button className="betslip-button">check</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Betslip;
