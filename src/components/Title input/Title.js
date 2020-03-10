import React from "react";
import { TextInput } from "react";
import "./Title.css";

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
            onChange={this.props.onChange}
            className={classes}
            type="text"
            name="input"
            placeholder={placeholder}
            state={this.state.inputValue}
          />
        </div>
      );
    }
  }
}
export default Title;
