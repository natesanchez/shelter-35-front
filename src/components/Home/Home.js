import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    if (!this.state.data) {
      fetch("https://nba-pi.herokuapp.com/legends")
        .then(res => res.json())
        .then(res => {
          this.setState({ data: res });
        });
    }
  }

  render() {
    if (this.state.data) {
      let posts = this.state.data.map(post => {
        return (
          <div className="mainContain">
            <img
              className="avatarCat"
              src={`https://robohash.org/ca${post._id}?set=set4`}
              alt="cat"
            ></img>
            <div className="returnedContainerPosts">
              <h1 className="postTitle">{post.name}</h1>
              <br />
              <h2 className="postMessage">Message: {post.team}</h2>
            </div>
          </div>
        );
      });
      return (
        <div className="postsMain">
          <Link className="addPost" to={"/new-post"}>
            Add Post
          </Link>
          <div className="mainHome">{posts}</div>
        </div>
      );
    } else {
      return (
        <div>
          <h2>Loading...</h2>
        </div>
      );
    }
  }
}

export default Home;
