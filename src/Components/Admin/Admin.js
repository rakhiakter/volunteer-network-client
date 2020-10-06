import React, { useEffect, useState } from 'react';
import { Col, Container, Nav, Navbar, Row, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Admin.css';
const Admin = () => {

       const [eventData, setEventData] = useState([]);
 useEffect(() => {
   fetch("https://volunteer-network-1.herokuapp.com/getEvent")
     .then((res) => res.json())
     .then((data) => {
       console.log(data);
       setEventData(data);
     });
 }, []);
    return (
      <div>
        <Container>
          <Row>
            <Navbar>
              <Navbar.Brand href="#home">
                <img
                  style={{ width: "120.26px", height: "56px" }}
                  src={require("../../logos/Group 1329.png")}
                  alt=""
                />
              </Navbar.Brand>
              <Nav className="mr-auto">
                <h1>Volunteer register list</h1>
              </Nav>
            </Navbar>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col xs={3}>
              <Link to="/list">Volunteer register list</Link>
              <br />
              <Link to="/add">Add event</Link>
              <p>col 4</p>
            </Col>
            <Col xs={8}>
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email ID</th>
                    <th>Registration Date</th>
                    <th>Volunteer list</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {eventData.map((event) => (
                    <tr>
                      <td>{event.fullName}</td>
                  <td colSpan="2">{event.email}</td>
                  <td>{event.date}</td>
                  <td>{event.name}</td>
                      <td><button>delete</button></td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </div>
    );
};

export default Admin;