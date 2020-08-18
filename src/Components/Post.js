import React, { Component } from "react";
import { Card, Form } from "react-bootstrap";
import Logo from "./Logo";
import Comments from "./Comments";
import "./Css/Post.css";
import { AiOutlineHeart } from "react-icons/ai";
import { FiSend, FiMessageCircle } from "react-icons/fi";

export default class Post extends Component {
  render() {
    return (
      <div class="container">
        <Card>
          <Logo
            text="mokkapostu"
            img="https://images.unsplash.com/photo-1597556710385-91d065029a85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"
          />
          <Card.Img
            variant="top"
            src="https://images.unsplash.com/photo-1559827291-72ee739d0d9a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=968&q=80"
          />
          <Card.Body>
            <Card.Title>
              <AiOutlineHeart />
              <FiMessageCircle />
              <FiSend />
            </Card.Title>
            <p>
              Liked by <strong>sruthi</strong> and <strong>6 others</strong>
            </p>
            <a href="#">View all 4 comments</a>
            <Comments text="nice" author="madhu" />
            <Comments text="cute" author="sang" />
            <Comments text="hello" author="am" />
            <Form.Control
              type="text"
              placeholder="Add Comment.."
              className="mt-3"
            />
          </Card.Body>
        </Card>
      </div>
    );
  }
}
