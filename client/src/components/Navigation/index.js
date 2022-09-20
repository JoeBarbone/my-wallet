import React from "react";
import "../../css/style.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Auth from '../../utils/auth';


function Navigation() {
    

  return (

    <header className="d-flex justify-content-between">

        <div>
            <h1 id="home-title" className="d-flex align-items-center"><Nav.Link href="/">My Wallet</Nav.Link></h1>
            <div id="home-tagline">
                <h5 className="my-title">Chaos simplified.</h5>
            </div>
        </div>


        <Navbar bg="white" expand="lg">
        <Container>

            {/* <Navbar.Brand href="/home">My Wallet</Navbar.Brand> */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            
            {Auth.loggedIn() ? (
                <>
                {/* display logged in user here */}
                <Nav.Link className="navbar-text" href="/cards">{Auth.getProfile()?.email}</Nav.Link>
                
                
                {/* <Nav.Link className="navbar-text" href="/cards">Home</Nav.Link> */}
                <Nav.Link className="navbar-text" href="/addCard">Add</Nav.Link>
                <Nav.Link className="navbar-text" onClick={() => Auth.logout()}>Logout</Nav.Link>
                </>
            ) : (
                <>
                <Nav.Link className="navbar-text" href="/login">Login</Nav.Link>
                <Nav.Link className="navbar-text" href="/about">About</Nav.Link>
                </>
            )}
            
                
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>

    </header>

  );
}

export default Navigation;