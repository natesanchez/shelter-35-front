import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Deleted.css";

class Deleted extends Component {
  render() {
    return (
      <div className="deletedDiv">
        <h1 className="deletedPost">Post Deleted</h1>
        <div className="buttonDiv">
          <Link className="" to={"/home"}>
            <button className="deletedButton">Back to Home</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Deleted;
