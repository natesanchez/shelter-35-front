import { TextBoxComponent } from "@syncfusion/ej2-react-inputs";
import React from "react";
import "./Comment.css";

export default class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ""
    };
  }

  render() {
    let classList = "";
    let types = ["normal"];
    if (types.includes(this.props.type)) {
      classList += `post-${this.props.type}`;
    }

    return (
      <div className={classList}>
        <TextBoxComponent
          className="normal"
          multiline={true}
          placeholder="Place your grievances here..."
          value=""
          onChange={this.props.onChange}
        />
      </div>
    );
  }
}
