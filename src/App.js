import React, { Component } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import Home from "./Pages/Home";
import ScrollToTopRoute from "./ScrollToTopRoute";
import NotFound from "./Pages/404";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <ScrollToTopRoute exact={true} path={"/"} component={Home} />
          <ScrollToTopRoute component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
