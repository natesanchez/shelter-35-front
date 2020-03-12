import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import AgeRes from "./components/Age_restriction/Age_restriction";
import FAQ from "./components/FAQ/faq";
import "./App.css";
import Post from "./components/Post/Post";
import Blog from "./components/Blog/Blog";
import Deleted from "./components/Deleted/Deleted";
import Edit from "./components/Edit/Edit";
import Edited from "./components/Edited/Edited";
import Submitted from "./components/Submitted/Submitted";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      postComment: "",
      postTitle: ""
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    console.log("Component did mount");
  }

  render() {
    return (
      <div className="App">
        <main>
          <Switch>
            <Route path="/" exact component={AgeRes} />
            <Route path="/new-post" component={Post} />
            <Route path="/blog" component={Blog} />
            <Route path="/home" component={Home} />
            <Route path="/faq" component={FAQ} />
            <Route path="/deleted" component={Deleted} />
            <Route path="/edited" component={Edited} />
            <Route path="/submitted" component={Submitted} />
            <Route
              path="/edit/:id"
              render={routerProps => <Edit {...routerProps} />}
            />
            {/* <Route path="/delete" component={Delete} /> */}
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
