import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import Logo from "./Logo";
import "./Css/Post.css";
export default class Post extends Component {
  render() {
    return (
      <div class="container">
        <Card>
          <Logo />
          <Card.Img
            variant="top"
            src="https://images.unsplash.com/photo-1559827291-72ee739d0d9a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=968&q=80"
          />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
