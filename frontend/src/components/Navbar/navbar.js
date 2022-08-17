import React from 'react'
import Footprint from './footprint.png'

function Navbar () {
    return(
        <>
        <div id="nav-bar">
        <div id="lower-logo">
                <p>Carbon Crushers</p>
                <img src={Footprint} height="20px"/>
            
                </div>
        <nav id="navlinks">
            <a href="google.com"className="nav-links">About</a>
            <a href="google.com"className="nav-links">Contact us</a>
            </nav>
        </div>
        </>
         )
        }
        
export default Navbar;
