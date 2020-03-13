import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Submitted.css";

class Submitted extends Component {
  render() {
    return (
      <div className="submittedDiv">
        <h1 className="submittedPost">Posted Successfully</h1>
        <div className="buttonDiv3">
          <Link className="" to={"/home"}>
            <button className="submittedButton">Back to Home</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Submitted;
