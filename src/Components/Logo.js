import React, { Component } from "react";
import "./Css/Logo.css";
export default class Logo extends Component {
  render() {
    let { text, img, subtext, ishref } = this.props;
    let btn = null;
    if (ishref === true) {
      btn = (
        <a href="#" className="follow-tag">
          Follow
        </a>
      );
    }
    return (
      <div className="logo-container">
        <img src={img} alt="avatar" className="logo-img mt-3 mb-3 ml-3"></img>
        <small className="ml-2 text">{text}</small>
        <small className="sub-text">{subtext ? subtext : null}</small>
        {btn}
      </div>
    );
  }
}
