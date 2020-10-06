import React from 'react';
import { Container } from 'react-bootstrap';
import "./Header.css";
import {
  Navbar,
  Nav
 
 
} from "react-bootstrap";

import { Link } from 'react-router-dom';



const Header = () => {
    return (
      <div>
        <Container>
          <Navbar>
            <Navbar.Brand href="#home">
              <img
                style={{ width: "120.26px", height: "56px" }}
                src={require("../../logos/Group 1329.png")}
                alt=""
              />
            </Navbar.Brand>
            <Nav className="ml-auto">
              <Link to="/" className="nav-link">
                Home
              </Link>
              <Link className="nav-link">Donation</Link>
              <Link className="nav-link">Events</Link>
              <Link className="nav-link">Blog</Link>
              <Link id="button1" className="btn" to="/login">
                Register
              </Link>
              <Link id="button2" className="btn" to="/admin">
                Admin
              </Link>
            </Nav>
          </Navbar>
        </Container>
      </div>
    );
};

export default Header;