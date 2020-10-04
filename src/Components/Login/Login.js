import React from 'react';
import {  Container, Form, Image, Row } from 'react-bootstrap';
import './Login.css';

const Login = () => {
    return (
      <div>
        <Container>
          <Row id="create-logo">
            <Image src={require("../../logos/Group 1329.png")} />
          </Row>

          <Row id="google">
            <Form id="middle">
              <h1 id="log">Login With</h1>
              <br />
              <Form.Group controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Continue with Google" />
                <Form.Text className="text-muted">
                  Don't have an Account? <a href="#">Create an account</a>
                </Form.Text>
              </Form.Group>
            </Form>
          </Row>
        </Container>
      </div>
    );
};

export default Login;