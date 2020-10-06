import React from 'react';
import {  Button, Container, Form, Image, Row } from 'react-bootstrap';
import './Login.css';
import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../App";
import {  useHistory, useLocation } from "react-router-dom";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../../src/firebase.config";

const Login = () => {
    const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSignIn: false,
    fullName: "",
    email: "",
    password: "",
    photo: "",
  });
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const googleProvider = new firebase.auth.GoogleAuthProvider();
  
  const handleGoogleSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((res) => {
        const { displayName, photoURL, email } = res.user;
        const signInUser = {
          isSignIn: true,
          fullName: displayName,
          email: email,
          photo: photoURL,
        };
        setUser(signInUser);
        setLoggedInUser(signInUser);
        history.replace(from);
        console.log(displayName, email, photoURL);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleSignOut = () => {
    firebase
      .auth()
      .signOut()
      .then((res) => {
        const signedOutUser = {
          isSignIn: false,
          name: "",
          email: "",
          photo: "",
        };
        setUser(signedOutUser);
      })
      .catch((err) => {
        // An error happened.
      });
  };
  
  

    
   
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
                <Button
                  id="border"
                  variant="light"
                  type="button"
                  size="lg"
                  onClick={handleGoogleSignIn}
                >
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
    }

export default Login;