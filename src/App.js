import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Post from "./Components/Post";
import Sidebar from "./Components/Sidebar";

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container main-container">
          <div class="row">
            <div class="col-lg-8">
              <Post />
            </div>
            <div class="col-lg-4">
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
