import React, { Component } from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import Logo from "./Logo";
import { AiFillHome, AiOutlineCompass, AiOutlineHeart } from "react-icons/ai";
import { FiSend } from "react-icons/fi";

export default class navbar extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Instagram</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-center">
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          </Form>
          <Nav>
            <Nav.Link href="#home">
              <AiFillHome />
            </Nav.Link>
            <Nav.Link href="#link">
              <FiSend />
            </Nav.Link>
            <Nav.Link href="#link">
              <AiOutlineCompass />
            </Nav.Link>
            <Nav.Link href="#link">
              <AiOutlineHeart />
            </Nav.Link>
            {/* <Nav.Link href="#link">
              <Logo />
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
