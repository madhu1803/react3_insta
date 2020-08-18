import React, { Component } from "react";
import { Card } from "react-bootstrap";
import Logo from "./Logo";

export default class Sidebar extends Component {
  render() {
    return (
      <Card className="post-card">
        <Card.Body>
          <Logo />
          <Logo />
          <Logo />
        </Card.Body>
      </Card>
    );
  }
}
