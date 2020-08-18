import React, { Component } from "react";
import "./Css/Logo.css";
export default class Logo extends Component {
  render() {
    return (
      <div>
        <img
          src="https://images.unsplash.com/photo-1597556710385-91d065029a85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"
          alt="avatar"
          className="logo-img mt-3 mb-3 ml-3"
        ></img>
        <small className="ml-2">Card Title</small>
      </div>
    );
  }
}
