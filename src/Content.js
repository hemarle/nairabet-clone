import React from "react";
import "./Content.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "./axios";
import { useState, useEffect } from "react";

function Content({ league, url, country }) {
  const [teams, setTeam] = useState([]);

  useEffect(() => {
    async function FetchData() {
      const request = await axios.get(url);
      console.log(request.data.data);
      setTeam(request.data.data);

      return request;
    }
    FetchData();
  }, []);

  console.log(teams);
  return (
    <div className="content">
      <div className="league_title">
        <div className="country"> {country}</div>
        <div className="league">{league}</div>

        <div className="wdl">
          <div className="win">1</div>
          <div className="draw">X</div>
          <div className="lose">2</div>
        </div>
      </div>

      <hr />

      <div className="content_teams">
        {teams.slice(0, 3).map((team) => (
          <div className="teams_content">
            <div className="team_content">
              <div className="full_team">
                <div className="team">
                  {team.teams[0]} - {team.teams[1]}
                </div>

                <div className="time">
                  <div className="day">{team.commence_time.split("T")[0]}</div>
                  <div className="hour">
                    {team.commence_time.split("T")[1].split("Z")[0]}
                  </div>
                </div>
              </div>

              <div className="odd">
                <button className=" home_btn ">
                  {team.sites[0].odds.h2h[0].toFixed(2)}
                </button>

                <button className="draw_btn">
                  {team.sites[0].odds.h2h[1].toFixed(2)}
                </button>

                <button className="away_btn">
                  {team.sites[0].odds.h2h[2]?.toFixed(2)}
                </button>
              </div>
            </div>
            <hr className="black" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Content;
