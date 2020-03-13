import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Edited.css";

class Edited extends Component {
  render() {
    return (
      <div className="editedDiv">
        <h1 className="editedPost">Post Edited Successfully</h1>
        <div className="buttonDiv2">
          <Link className="" to={"/home"}>
            <button className="editedButton">Back to Home</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Edited;
