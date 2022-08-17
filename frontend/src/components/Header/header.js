import React from 'react'
import Footprint from './footprint.png'

function AppHeader () {
    return(
        <>
        <section id="overall-header">
            <div id="companyinfo">
                <p>Carbon Crushers</p>
                <img src={Footprint} height="20px"/>
            </div>
            <div id="teamAndIndividualFootprint">
                <p>My Footprint: 8564</p>
                <p>Team Footprint: 25764</p>
            </div>
        </section>
        </>
    )
}

export default AppHeader