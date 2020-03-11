import React from "react";
import { storiesOf } from "@storybook/react";
import Comment from "./Comment";

storiesOf("Comment", module).add("post", () => (
  <Comment label="Post your grievances here" type="normal" />
));
