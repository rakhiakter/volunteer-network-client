import React, { useContext, useState } from 'react';
import { Container, Row, Form , Button, Image} from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import './CreateAccount.css';
const CreateAccount = (props) => {
  
   const [loggedInUser, setLoggedInUser] = useContext(UserContext);
   const { task } = useParams();
   const { eventName, color, pic } = props.location.state;
  const [event, setEvent] = useState({
fullName: loggedInUser.fullName,
email: loggedInUser.email,
date: loggedInUser.date,
description: '',
eventName: eventName,
pic: pic,
color: color
  });
const history = useHistory();
const handleBlur = (e) => {
  console.log(e.target.value,e.target.id);
    let isFieldValid = true;

    if (e.target.id === "email") {
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
        if (e.target.id === "fullName") {
      isFieldValid =e.target.value > 0;
    }
 if (e.target.id === "date") {
      isFieldValid =e.target.value > 0;
    }
     if (e.target.id === "description") {
      isFieldValid =e.target.value > 0;
    }
     if (e.target.id === "eventName") {
      isFieldValid =e.target.value > 0;
    }

    if (isFieldValid) {
     
      event[e.target.id] = e.target.value;
      setEvent(event);
    }
  };
  
  const registerButton = (e) => {
    console.log(loggedInUser);
    console.log(event);
console.log("submit");
   fetch('https://volunteer-network-1.herokuapp.com/addEvent', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(event) 
            })
            .then(res => res.json())
            .then(data => {
                if(data){
                  history.push("/eventTasks");

                }
            })
            e.preventDefault();
        }

  

console.log(event);
    return (
      <div>
        <Container>
          <Row id="create-logo">
            <Image src={require("../../logos/Group 1329.png")} />
          </Row>

          <Row id="name">
            <Form id="register">
              <h3>Register as a Volunteer</h3>
              <Form.Group controlId="fullName">
                <Form.Control type="text" placeholder="FullName" defaultValue={loggedInUser.fullName}  onBlur={handleBlur} required/>
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Control type="email" placeholder=" Email" defaultValue={loggedInUser.email}  onBlur={handleBlur} required/>
              </Form.Group>
              <Form.Group controlId="date">
                <Form.Control type="text" placeholder="Date"   onBlur={handleBlur} required/>
              </Form.Group>
              <Form.Group controlId="description">
                <Form.Control type="text" placeholder="Description"   onBlur={handleBlur} required/>
              </Form.Group>
              <Form.Group controlId="eventName">
                <Form.Control
                  type="text"
                  placeholder="Organize books at the library" defaultValue={eventName}
                   onBlur={handleBlur} required
                />
              </Form.Group>
              <Button variant="primary" size="lg" onClick={registerButton}>
                Registration
              </Button>
            </Form>
          </Row>
        </Container>
      </div>
    );
};

export default CreateAccount;