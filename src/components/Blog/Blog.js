import React, { Component } from "react";
import catNames from "cat-names";
import { Link } from "react-router-dom";
import "./Blog.css";

class Blog extends Component {
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
      fetch("https://shelter35.herokuapp.com/blogs")
        .then(res => res.json())
        .then(res => {
          this.setState({ data: res });
          console.log(this.state.data);
        });
    }
  }

  render() {
    if (this.state.data) {
      let posts = this.state.data.map(post => {
        let catUser = catNames.random();
        return (
          <div className="Main" testing="main">
            <div className="BlogPost">
              <img
                className="avatarCat"
                src={`https://robohash.org/ca${post._id}?set=set4`}
                alt="cat"
              ></img>
              <h3 className="Author">{post.author}</h3>
              <h1 className="Title"> Title:{post.title}</h1>
              {/* <h2 className="User">User:{catUser}</h2> */}
              <div Class="flex">
                <h4 className="CourseWeek">Course Week: {post.courseWeek}</h4>
                <h5 className="Confidence">
                  Content Confidence: {post.confidenceInYourContent}/10{" "}
                </h5>
              </div>
              <h6 className="Content">{post.content}</h6>
            </div>
          </div>
        );
      });
      return (
        <div className="postsMain">
          <nav>
            <Link className="headerLinkHome" to="/home">
              <h1 className="title">Shelter35</h1>
            </Link>
          </nav>
          <div className="">{posts}</div>
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

export default Blog;
