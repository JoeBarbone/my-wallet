import React from "react";
import "../../css/style.css";
import { NavLink } from "react-router-dom"



function Nav() {
    
    return (

    <header className="d-flex justify-content-between">

        <div>
            <h1 id="home-title" className="d-flex align-items-center"><NavLink to="/">My Wallet</NavLink></h1>
            <div id="home-tagline">
                <h5 className="my-title">Chaos simplified.</h5>
            </div>
        </div>

        <nav className="d-flex align-items-center">

            <NavLink className="mx-3" to="/">Home</NavLink>

            <NavLink className="mx-3" to="/login">Login</NavLink>

            <NavLink className="mx-3" to="/cards">Cards</NavLink>
            
            <NavLink className="mx-3" to="/addCard">Add</NavLink>

            <NavLink className="mx-3" to="/update">Update</NavLink>
        </nav>

    </header>


       

    )

}


export default Nav;