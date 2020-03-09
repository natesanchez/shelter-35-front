import React, { Component } from "./node_modules/react";
import { Route, Link, Switch } from "./node_modules/react-router-dom";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    console.log("Component did mount");
  }

  render() {
    return (
      <div>
        <nav>
          <Link className="headerLinkHome" to="/">
            <h1 className="title">Shelter35</h1>
          </Link>
        </nav>
        <main>
          <Switch>
            <Route path="/" exact component={Component} />
            <Route path="/new-post" component={NewPost} />
          </Switch>
        </main>
        <footer></footer>
      </div>
    );
  }
}

export default App;
