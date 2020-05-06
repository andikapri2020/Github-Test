import './index.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from './components/App';
import Search from './components/Search';
import User from './components/User';

const routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <App />
          <Search />
        </Route>
	<Route path="/user/:username" exact>
          <User />
        </Route>
      </Switch>
    </Router>
  );
};

export default routes;

