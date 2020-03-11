import React, { Component } from "react";
import { Link } from "react-router-dom";
import catNames from "cat-names";
import "./Home.css";
import "../Loading Cat/loadingcat.css";
import Button from "../Button/Button";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      videoURL:
        "https://cdn.dribbble.com/users/160117/screenshots/3197970/main.gif?vid=1"
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    if (!this.state.data) {
      fetch("https://shelter35.herokuapp.com/posts")
        .then(res => res.json())
        .then(res => {
          this.setState({ data: res });
        });
    }
  }

  render() {
    if (this.state.data) {
      let posts = this.state.data.map(post => {
        let catUser = catNames.random();
        return (
          <div className="mainContain">
            <img
              className="avatarCat"
              src={`https://robohash.org/ca${post._id}?set=set4`}
              alt="cat"
            ></img>
            <div className="returnedContainerPosts">
              <h3>User: {catUser}</h3>
              <h1 className="postTitle"> Subject: {post.postTitle}</h1>
              <br />
              <h2 className="postMessage">Message: {post.postComment}</h2>
              <br />
              <h5 className="postId">postID: {post._id}</h5>
              <div className="buttons">
                {/* look into with router or pass props using link component */}
                <Link className="editPost" to="/edit">
                  <Button label="Edit" type="edit" />
                </Link>
                <Link className="deletePost" to="/delete">
                  <Button label="Delete" type="delete" />
                </Link>
              </div>
            </div>
          </div>
        );
      });
      return (
        <div className="postsMain">
          <nav>
            <Link className="blog" to="/blog">
              <h1 className="hiddenTitle">blog</h1>
            </Link>
            <Link className="headerLinkHome" to="/home">
              <h1 className="title">Shelter35</h1>
            </Link>
            <Link className="faq" to="/faq">
              <h1 className="title">FAQ</h1>
            </Link>
          </nav>
          <Link className="addPost" to={"/new-post"}>
            Add Post
          </Link>
          <div className="mainHome">{posts}</div>
        </div>
      );
    } else {
      return (
        <div className="mainLoad">
          <video loop autoPlay>
            <source src={this.state.videoURL} type="video/mp4" />
            <source src={this.state.videoURL} type="video/ogg" />
            Your browser does not support the video tag.
          </video>
        </div>
      );
    }
  }
}

export default Home;
