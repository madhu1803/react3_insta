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
            <Card.Text>Liked by mokkapostu and 64 others.</Card.Text>
            <a href="#">View all 64 comments</a>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
