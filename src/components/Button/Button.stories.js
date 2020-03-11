import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "./Button";

storiesOf("Button", module)
  .add("white", () => <Button label="Submit" type="white" />)
  .add("enter", () => <Button label="Enter" type="enter" />)
  .add("exit", () => <Button label="Exit" type="exit" />)
  .add("edit", () => <Button label="Edit" type="edit" />)
  .add("delete", () => <Button label="Delete" type="delete" />);
