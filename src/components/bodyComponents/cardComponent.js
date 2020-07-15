import React, { Component } from "react";
import {Card} from 'react-bootstrap';
import {Button} from 'react-bootstrap';

export default class ItemCard extends Component {

  render() {
    return (
      <Card style={{ width: "12rem" }}>
        <Card.Img variant="top" src="holder.js/200px200" />
        <Card.Body>
          <Card.Title id = "title" className="text-center">Title</Card.Title>
          <Card.Text id = "description">description</Card.Text>
          <Card.Text id = "price">300$</Card.Text>
          <Button variant= "primary" className="center">Add to cart</Button>
        </Card.Body>
      </Card>
    );
  }
}