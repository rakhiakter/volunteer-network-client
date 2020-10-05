import React from 'react';
import { Container, Row, Form , Button, Image} from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './CreateAccount.css';
const CreateAccount = (props) => {
  const {event} = useParams();
const {task} = props.location.state;
console.log(task);
    return (
      <div>
        <Container>
          <Row id="create-logo">
            <Image src={require("../../logos/Group 1329.png")} />
          </Row>

          <Row id="name">
            <Form id="register">
              <h3>Register as a Volunteer</h3>
              <Form.Group controlId="formBasicEmail">
                <Form.Control type="text" placeholder="FullName" defaultValue={event} />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Control type="text" placeholder="UserName Or Email" />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Control type="text" placeholder="Date" />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Control type="text" placeholder="Description" />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Control
                  type="text"
                  placeholder="Organize books at the library"
                />
              </Form.Group>
              <Button variant="primary" size="lg">
                Registration
              </Button>{" "}
            </Form>
          </Row>
        </Container>
      </div>
    );
};

export default CreateAccount;