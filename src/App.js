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
              <Logo
                text="madhumithaa"
                img="https://images.unsplash.com/photo-1597556710385-91d065029a85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"
                subtext="madhu"
              />
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
