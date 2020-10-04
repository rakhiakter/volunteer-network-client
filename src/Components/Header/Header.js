import React from 'react';
import { Container } from 'react-bootstrap';
import "./Header.css";
import {
  Navbar,
  Nav
 
 
} from "react-bootstrap";
import Search from '../Home/Search/Search';



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
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Donation</Nav.Link>
              <Nav.Link href="#pricing">Events</Nav.Link>
              <Nav.Link href="#pricing">Blog</Nav.Link>
              <Nav.Link id="button1" className="btn" href="#pricing">
                Register
              </Nav.Link>
              <Nav.Link id="button2" className="btn" href="#pricing">
                Admin
              </Nav.Link>
            </Nav>
          </Navbar>
        </Container>
        <Search></Search>
      </div>
    );
};

export default Header;