import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Login from "./components/Login";
import "./styles.scss";

import BubblePage from './components/BubblePage';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to='/'>Login</Link>
          <Link to='/bubblepage'>Bubble Page</Link>
        </nav>

        <Switch>
          <Route exact path="/" component={Login} />
            {/* 
              Build a PrivateRoute component that will 
              display BubblePage when you're authenticated 
            */}
          <PrivateRoute exact path = '/bubblepage' component={BubblePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
