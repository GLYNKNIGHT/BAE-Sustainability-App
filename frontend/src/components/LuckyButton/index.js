import React from "react";
import {useState} from "react";

import '../App/App.css'

function LuckyButton( {luckyAction, setLuckyAction} ){

    function handleClick () {
        setLuckyAction("poop")
    }
    
      return(
        <div className="lucky">
            <button className="luckybutton" onClick={handleClick}>See your stats</button>
        </div>
    )
}

export default LuckyButton