import React, { Component } from "react";
import { Card } from "react-bootstrap";
import Logo from "./Logo";

export default class Sidebar extends Component {
  render() {
    return (
      <Card className="post-card">
        <Card.Body>
          <p>Suggestions for you </p>
          <Logo
            text="kiddo"
            img="https://images.unsplash.com/photo-1597556710385-91d065029a85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"
            subtext="school of arts"
            ishref={true}
          />
          <Logo
            text="pink"
            img="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80"
            subtext="Followed by madhu and 1 other"
            ishref={true}
          />
          <Logo
            text="sam"
            img="https://images.unsplash.com/photo-1534008757030-27299c4371b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            subtext="Followed by madhu and 2 others"
            ishref={true}
          />
        </Card.Body>
      </Card>
    );
  }
}
