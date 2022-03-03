import React from "react";
import {Navbar,Nav} from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import "./Navbar.css"



const NavbarComponent = () => {
    return (
        <>

            <Navbar bg="primary" variant="dark" id="nav">
              
                    <Navbar.Brand href="/" className="nav1" >My Notes</Navbar.Brand>
                    <Nav className="me-auto">
                        <NavLink  className="nav-link" to="/">Home</NavLink>
                        <NavLink  className="nav-link" to="/about">About</NavLink>
                    </Nav>
                    <Nav >
                        <NavLink  className="nav-link " to="/login">Login</NavLink>
                        <NavLink  className="nav-link pe-5" to="/signup">SignUp</NavLink>
                    </Nav>
             
            </Navbar>



        </>

    );

}
export default NavbarComponent;