import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './screens/Home';
import LikePage from './screens/LikePage';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/liked">
            <LikePage />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
