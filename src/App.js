import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Home from './pages/Home/Home'
import Detail from './pages/Details/Detail';

import './App.css';

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