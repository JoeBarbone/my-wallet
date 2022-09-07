import React from "react";
import "../../css/style.css";
import { NavLink } from "react-router-dom"


function Nav() {
    
    return (

        <header className="d-flex justify-content-between">

            <div>
                <h1 id="home-title" className="d-flex align-items-center"><NavLink to="/">My Wallet</NavLink></h1>
                <h6 className="my-title">Simplifying chaos if you lose your wallet</h6>
            </div>

            <nav className="d-flex align-items-center">

                <NavLink className="mx-3" to="/">Home</NavLink>

                {/* <NavLink className="mx-3" to="/portfolio">Portfolio</NavLink> */}

                {/* <NavLink className="mx-3" to="/contact">Contact</NavLink> */}

                {/* <NavLink className="mx-3" to="/resume">Resume</NavLink> */}
           
            </nav>

        </header>

    )

}


export default Nav;