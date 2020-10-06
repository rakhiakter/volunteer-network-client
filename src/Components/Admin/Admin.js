import React from 'react';
import { Col, Container, Nav, Navbar, Row, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Admin.css';
const Admin = () => {
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
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td colSpan="2">Larry the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </div>
    );
};

export default Admin;