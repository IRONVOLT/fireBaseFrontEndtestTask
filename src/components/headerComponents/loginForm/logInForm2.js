import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import * as firebase from "firebase";

export default class LogInForm extends Component {
    createAccount = () => {
        const { email, password } = this.state;
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .catch((error) => console.log(error));
      };

      signIn = () => {
        const { email, password } = this.state;
    
        firebase.auth().signInWithEmailAndPassword(email, password)
          .then(() => {
            this.setState({ hasAccount: true })
          })
          .catch((error) => console.log(error));
      }

    render() {
        return (
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox" >
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Log In
                </Button>
                <Button variant="primary" type="submit" >
                    Create account
                </Button>
            </Form>
        );
    }
}