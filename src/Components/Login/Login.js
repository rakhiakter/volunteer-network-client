import React from 'react';
import {  Button, Container, Form, Image, Row } from 'react-bootstrap';
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
                <Button id="border" variant="light" type="button" size="lg">
                  <img
                    id="icon"
                    src={require("../../icon/google.png")}
                    alt=""
                  />
                  <span id="continue"> Continue with Google</span>
                </Button>
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