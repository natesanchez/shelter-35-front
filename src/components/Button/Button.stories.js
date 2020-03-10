import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "./Button";

storiesOf("Button", module)
  .add("white", () => <Button label="Submit" type="white" />)
  .add("enter", () => <Button label="Enter" type="enter" />)
  .add("exit", () => <Button label="Exit" type="exit" />);
