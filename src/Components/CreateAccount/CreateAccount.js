import React, { useContext, useState } from 'react';
import { Container, Row, Form , Button, Image} from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import './CreateAccount.css';
const CreateAccount = (props) => {
  const [event, setEvent] = useState();
  const registerButton = () => {
console.log("submit");
   fetch('http://localhost:5000/addEvent', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(event) 
            })
            .then(res => json())
            .then(data => {
                if(result){
                    loadAllProducts();
                     const update = document.getElementById('update');
                    update.innerHTML = '';
                }
            })
        }

  };
   const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const {task} = useParams();
const { eventName } = props.location.state;
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
                <Form.Control type="text" placeholder="FullName" defaultValue={loggedInUser.name} />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Control type="email" placeholder=" Email" defaultValue={loggedInUser.email}/>
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
                  placeholder="Organize books at the library" defaultValue={eventName}
                />
              </Form.Group>
              <Button variant="primary" size="lg" onClick={registerButton}>
                Registration
              </Button>{" "}
            </Form>
          </Row>
        </Container>
      </div>
    );
};

export default CreateAccount;