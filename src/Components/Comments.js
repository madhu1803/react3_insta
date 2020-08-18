import React, { Component } from "react";
import { Card, Form } from "react-bootstrap";
import { AiOutlineHeart } from "react-icons/ai";

export default class Comments extends Component {
  render() {
    return (
      <Card.Text>
        <p className="mt-2">
          <strong>madhumithaa</strong> @sang <AiOutlineHeart />
        </p>
      </Card.Text>
    );
  }
}
