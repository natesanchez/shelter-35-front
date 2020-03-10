import React, { Component } from "react";
import { Link } from "react-router-dom";
import catNames from "cat-names";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postTitle: "",
      postComment: ""
    };
  }

  render() {
    return (
      <div className="postsMain">
        <Link className="addPost" to={"/new-post"}>
          Add Post
        </Link>
        <div className="mainHome">{posts}</div>
      </div>
    );
  }
}
export default Post;
