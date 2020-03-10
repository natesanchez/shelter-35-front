import React from "react";
import "./Button.css";

const Button = props => {
  let classList = "";

  let types = ["white", "enter", "exit", "edit"];

  if (types.includes(props.type)) {
    classList += ` button-${props.type}`;
  }

  return (
    <button className={classList} onClick={props.onClick}>
      {props.label}
    </button>
  );
};

export default Button;
