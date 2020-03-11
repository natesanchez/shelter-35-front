import React, { Component } from "react";
import Axios from "axios";
import Comment from "../Comment/Comment";
import Button from "../Button/Button";
import Title from "../Title input/Title";
import "../Post/Post.css";
import { Link } from "react-router-dom";

class Edit extends Component {
  constructor(props) {
    super(props);
    //
    this.state = {
      _id: "",
      postTitle: "",
      postComment: ""
    };
    this.onChangeId = this.onChangeId.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeComment = this.onChangeComment.bind(this);
  }

  onChangeId = e => {
    this.setState({
      postId: e.target.value
    });
    console.log(this.state._id);
  };

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
      const newPost = {
        postTitle: this.state.postTitle,
        postComment: this.state.postComment
      };
      Axios.post("https://shelter35.herokuapp.com/posts", newPost).then(res =>
        console.log(res)
      );
      this.setState({
        postTitle: "",
        postComment: ""
      });
      this.props.history.push("/home");
    }
  };
  render() {
    return (
      <div className="newPostContainer">
        <div>
          <Title className="getId" type="text" placeholder="Post the ID here" />
        </div>
        <form className="submitForm" onSubmit={this.onSubmit}>
          <h1>Edit Post</h1>
          <div className="formInput">
            <label className="inputLabel">Post Title: </label>
            <Title
              type="text"
              placeholder="Post ID"
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
          <div className="stuff">
            <Button label="Edit" type="edit" />
            <Button label="Delete" type="delete" />
          </div>
        </form>
      </div>
    );
  }
}
export default Edit;
