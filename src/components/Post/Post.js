import React, { Component } from "react";
import Axios from "axios";
import Comment from "../Comment/Comment";
import Button from "../Button/Button";
import Title from "../Title input/Title";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postTitle: null,
      postComment: null
    };
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeComment = this.onChangeComment.bind(this);
  }
  onChangeTitle = e => {
    this.setState({
      postTitle: e.target.value
    });
    console.log(this.state.postTitle);
  };
  onChangeComment = e => {
    this.setState({
      postComment: e.target.value
    });
    console.log(this.state.postComment);
  };
  onSubmit = e => {
    if (this.state.postTitle === "" || this.state.postComment === "") {
      return;
    } else {
      e.preventDefault();
      console.log("Submitted");
      const newLegend = {
        postTitle: this.state.postTitle,
        postComment: this.state.postComment
      };
      Axios.post("https://shelter35.herokuapp.com/posts", newLegend).then(res =>
        console.log(res)
      );
      this.setState({
        postTitle: null,
        postComment: null
      });
      this.props.history.push("/home");
    }
  };
  render() {
    return (
      <div className="newPostContainer">
        <form className="submitForm" onSubmit={this.onSubmit}>
          <h1>Add Post</h1>
          <div className="formInput">
            <label className="inputLabel">Post Title: </label>
            <Title
              type="text"
              placeholder="Post Title"
              text
              onChange={this.onChangeTitle}
            />
          </div>
          <br />
          <div className="formInput">
            <label className="inputLabel">Post Comment: </label>
            <Comment
              className="inputBox"
              label="Post your grievances here"
              type="normal"
              onChange={this.onChangeComment}
            />
          </div>
          <br />
          <Button
            className="submitPost"
            label="Submit"
            type="white"
            value="Submit"
          />
        </form>
      </div>
    );
  }
}
export default Post;
