import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Post from "./Components/Post";
import Sidebar from "./Components/Sidebar";
import Logo from "./Components/Logo";

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container main-container">
          <div class="row">
            <div class="col-lg-8 col-md-12 col-sm-12">
              <Post />
            </div>
            <div class="col-lg-4 d-none d-lg-block">
              <Logo />
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
