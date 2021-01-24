import "./App.css";
import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Post from "./components/Post";
import NavBar from "./components/NavBar";
import Project from "./components/Project";
import SinglePost from "./components/SinglePost";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/post/:slug">
          <SinglePost />
        </Route>
        <Route path="/about">
          <About />
        </Route>

        <Route path="/post">
          <Post />
        </Route>
        <Route path="/project">
          <Project />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
