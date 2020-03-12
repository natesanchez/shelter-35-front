import React, { Component } from "react";
import Axios from "axios";
import Comment from "../Comment/Comment";
import Button from "../Button/Button";
import Title from "../Title input/Title";
import "./Post.css";
import { Link } from "react-router-dom";

class Post extends Component {
  constructor(props) {
    super(props);
    //
    this.state = {
      postTitle: "",
      postComment: ""
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
          <div className="bottomEdit">
            <Button
              className="submitPost"
              label="Submit"
              type="white"
              value="Submit"
            />
            <Link to={"/home"}>
              <Button className="editHome" label="Home" type="home" />
            </Link>
          </div>
        </form>
      </div>
    );
  }
}
export default Post;
