import React, { Component } from "react";
import "./App.css";
import LogIn from "./components/headerComponents/loginForm/logInForm2";
import ItemCard from './components/bodyComponents/cardComponent' 
import {Container} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';


export default class App extends Component {

  render() {
    return (
      <Container>
  <Row >
    <Col sm={9}>Test shop</Col>
    <Col sm={3}><LogIn /></Col>
  </Row>
  <Row className='mt-5'>
    <Col md><ItemCard /></Col>
    <Col md><ItemCard /></Col>
    <Col md><ItemCard /></Col>
    <Col md><ItemCard /></Col>
    <Col md><ItemCard /></Col>
  </Row>
</Container>
    );
  }
}