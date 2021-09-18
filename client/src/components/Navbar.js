import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from "./About";
import Home from "./Home";
import PostWords from "./PostWords";
import Words from "./Words";
import "../App.css"

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul className="nav-bar">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/addword">Add Word</Link>
            </li>
            <li>
              <Link to="/wordlist">Word List</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/wordlist">
            <Words/>
          </Route>
          <Route path="/addword">
            <PostWords/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}