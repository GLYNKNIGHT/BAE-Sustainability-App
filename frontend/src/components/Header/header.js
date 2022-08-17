import React from 'react'
import Footprint from './footprint.png'

function AppHeader ({myScore, setMyScore, teamScore, setTeamScore}) {
    return(
        <>
        <section id="overall-header">
            <div id="companyinfo">
                <p>Carbon Crushers</p>
                <img src={Footprint} alt="footprint" height="20px"/>
            </div>
            <div id="teamAndIndividualFootprint">
                <p>My Footprint: {myScore}</p>
                <p>Team Footprint: {teamScore}</p>
            </div>
        </section>
        </>
    )
}

export default AppHeader