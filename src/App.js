import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Avatar from "./components/Avatar/Avatar";
import AgeRes from "./components/Age_restriction/Age_restriction";
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
   master
        <nav>
          <Link className="headerLinkHome" to="/">
            <h1 className="title" >Shelter35</h1>
          </Link>
        </nav>
  master
        <main>
          <Switch>
            <Route path="/" exact component={AgeRes} />
            <Route path="/new-post" component={Avatar} />
            <Route path="/home" component={Home} />
          </Switch>
        </main>
        <footer></footer>
      </div>
    );
  }
}

export default App;
