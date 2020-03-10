import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "./Button";

storiesOf("Button", module)
  .add("white", () => <Button label="Submit" type="white" />)
  .add("enter", () => <Button label="Enter at your own Risk" type="enter" />)
  .add("exit", () => <Button label="Thou Shall Not Pass!" type="exit" />)
  .add("edit", () => <Button label="..edit" type="edit" />);
