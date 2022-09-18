import React from "react";
import "../../css/style.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Auth from '../../utils/auth';


function Navigation() {

    // const logout = event => {
    //     event.preventDefault();
    //     Auth.logout();
    // };

    

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
                {/* try to display logged in user here */}
                <Nav.Link className="navbar-text">{Auth.getProfile()?.email}</Nav.Link>
                
                
                <Nav.Link className="navbar-text" href="/cards">Home</Nav.Link>
                <Nav.Link className="navbar-text" href="/addCard">Add</Nav.Link>
                <Nav.Link className="navbar-text" onClick={() => Auth.logout()}>Logout</Nav.Link>
                {/* <a href="/" onClick={logout}>
                    Logout
                </a> */}
                </>
            ) : (
                <>
                <Nav.Link className="navbar-text" href="/login">Login</Nav.Link>
                <Nav.Link className="navbar-text" href="/about">About</Nav.Link>
                {/* <Nav.Link href="/signup">Signup</Nav.Link> */}
                </>
            )}
            
                {/* <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="#/about">About</Nav.Link>
                <Nav.Link href="#/login">Login</Nav.Link>
                <Nav.Link href="#/cards">Cards</Nav.Link>
                <Nav.Link href="#/addCard">Add</Nav.Link>
                <Nav.Link href="#/update">Update</Nav.Link> */}

                {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                    Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                    Separated link
                </NavDropdown.Item>
                </NavDropdown> */}
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>

    </header>

  );
}

export default Navigation;