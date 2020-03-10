import React from "react";
import { TextField } from "react";
import "./Comment.css";

class Title extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ""
    };
  }
  render() {
    let classes = "";
    let types = ["text"];
    if (types.includes(this.props.type)) {
      classes += ` Title-${this.props.type}`;
    }
    if (this.props.Comment) {
      classes += ` Title-Comment`;
    }
    let placeholder = this.props.placeholder;
    if (placeholder === "") {
      placeholder = this.props.label;
    }
    if (this.props.text) {
      return (
        <div>
          <label className="text-label" htmlFor="input">
            {this.props.label}
          </label>
          <br />
          <input
            onChange={e => {
              this.setState({ inputValue: e.target.value });
            }}
            className={classes}
            type="text"
            name="input"
            placeholder={placeholder}
          />
        </div>
      );
    }
  }
}
export default Title;
