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
          console.log(this.state.data)
        });
    }
  }

  render() {
    if (this.state.data) {
      let posts = this.state.data.map(post => {
        let catUser = catNames.random();
        return (
          <div className="Main">
            <div className="BlogPost">
            <img
              className="avatarCat"
              src={`https://robohash.org/ca${post._id}?set=set4`}
              alt="cat">
            </img>
              <h3 className="Author">{post.author}</h3>
              <h1 className="Title"> Title:{post.title}</h1>
              {/* <h2 className="User">User:{catUser}</h2> */}
                      <div Class="flex">
              <h4 className="CourseWeek">Course Week: {post.courseWeek}</h4>
              <h5 className="Confidence">Content Confidence: {post.confidenceInYourContent}/10 </h5>
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
          <p className="pm"> How to Post in Postman</p>  
          <p   className="codepen">     
          <iframe height="399" style={{width: "100%"}} scrolling="no" title="Example Shelter Blog Post for Postman " 
          src="https://codepen.io/Wolf8/embed/eYNMNbV?height=399&theme-id=dark&default-tab=result" frameborder="yes" allowtransparency="true" allowfullscreen="true">
          See the Pen <a href='https://codepen.io/Wolf8/pen/eYNMNbV'>Example Shelter Blog Post for Postman </a> by Andy G
          (<a href='https://codepen.io/Wolf8'>@Wolf8</a>) on <a href='https://codepen.io'>CodePen</a>.
          </iframe>
          </p>
          {/* <p className="pm"> courseWeek": 8</p>
          <p className="pm"> title": "Adding a Blog Post to Shelter</p>
          <p className="pm"> "confidenceInYourContent": 8</p>
          <p className="pm">
        "content": "As an capability for advanced users, we are giving you the ability to push a blog post to Shelter.  The only way you can do              this is via Postman.  If you use this model, you can create a blog post.  Use the `post` method and this URL:             `https://shelter35.herokuapp.com/blogs/`.  Looking forward to your posts!"
    }</p> */}

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

// <div className="Main">
// <div className="Container">
// <h1 className="BlogPost"></h1>
// <h2 className="Author"></h2>
// <p>Author</p>
// <h3 className="Title"></h3>
// <p>Title</p>
// <h4 className="Courseweek"></h4>
// <p>8</p>
// <h5 className="Confidence"></h5>
// <p>6/10</p>
// <h6 className="Content"></h6>
// <p>Content</p>

//   <div class="">hello world</div>
//    </div>
//   </div>