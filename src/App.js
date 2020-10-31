import React from 'react';
import Home from './pages/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import './App.css';
import Detail from './pages/Detail';

function App() {
  
  return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/pokemon/:name">
            <Detail />
          </Route>
          <Route render={() => <Redirect to="/" />} />
        </Switch>
      </Router>
  );
}

export default App;