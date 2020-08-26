import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import HomePage from "./containers/home_page/HomePage";
import SearchPage from "./containers/search_page/SearchPage";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={HomePage} />
          <Route path="/search" component={SearchPage} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
