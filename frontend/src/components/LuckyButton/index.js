import React from "react";
import {useState} from "react";

import '../App/App.css'

function LuckyButton( {teamScore, setTeamScore, myScore, setMyScore} ){
    let newPersonalScore = 10000-Number(myScore)

    function handleClick () {
        let newTeamScore = Number(teamScore) - Number(newPersonalScore) - 175
        setTeamScore(newTeamScore)
    }
    
      return(
        <div className="lucky">
            <button className="luckybutton" onClick={handleClick}>Refresh team stats</button>
        </div>
    )
}

export default LuckyButton