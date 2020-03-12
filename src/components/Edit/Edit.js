import React, { Component } from "react";
import Axios from "axios";
import Comment from "../Comment/Comment";
import Button from "../Button/Button";
import Title from "../Title input/Title";
import "../Edit/Edit.css";
import { Link } from "react-router-dom";

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: null,
      postTitle: "",
      postComment: "",
      data: null
    };
    // this.onChangeId = this.onChangeId.bind(this);
    // this.onChangeTitle = this.onChangeTitle.bind(this);
    // this.onChangeComment = this.onChangeComment.bind(this);
  }

  onChangeId = e => {
    this.setState({
      _id: e.target.value
    });
    console.log(this.state._id);
  };

  // onChangeTitle = e => {
  //   this.setState({
  //     postTitle: e.target.value
  //   });
  //   console.log(this.state.postTitle);
  // };

  // onChangeComment = e => {
  //   this.setState({
  //     postComment: e.target.value
  //   });
  //   console.log(this.state.postComment);
  // };

  deletePost = e => {
    e.preventDefault();
    let url =
      "https://shelter35.herokuapp.com/posts/" + this.props.match.params.id;
    console.log(url);
    Axios.delete(url)
      .then(res => {
        console.log(res.data);
      })
      .catch(error => {
        console.log(error);
      });
    this.props.history.push("/home");
  };

  componentDidMount() {
    console.log("Mounted");
    let url =
      "https://shelter35.herokuapp.com/posts/id/" + this.props.match.params.id;
    Axios.get(url)
      .then(res => {
        console.log(res.data);
        this.setState({ data: res.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    if (this.state.data) {
      return (
        <div>
          <div className="returnedData">
            <h2 className="manipulateH1">postID: {this.state.data[0]._id}</h2>
            <br />
            <h3 className="manipulateH3">
              Subject: {this.state.data[0].postTitle}
            </h3>
            <br />
            <h3 className="manipulateH3">
              Message: {this.state.data[0].postComment}
            </h3>
          </div>
          <form>
            Title: <input type="text"></input>
            <br />
            Message: <input type="text"></input>
            <br />
            <input type="submit" value="Submit Edit"></input>
          </form>
          <br />
          <br />
          <button onClick={this.deletePost} className="deletePost">
            Delete this post entirely
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <h5>Loading...</h5>
        </div>
      );
    }
  }
}

export default Edit;
