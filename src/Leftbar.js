import React from "react";
import "./Leftbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Bet from "./Bet";
import Betslip from "./Betslip";

function Leftbar() {
  return (
    <div className="leftbar">
      <div className="leftbar_options">
        <Bet
          title="Bet Slip"
          image="https://nairabet.com/images/svg/pencil.svg"
        />
        <Betslip title="Bet Slip Check" no="Two" />
        <Betslip title="Load Booking Code" no="Three" />
      </div>
    </div>
  );
}

export default Leftbar;
