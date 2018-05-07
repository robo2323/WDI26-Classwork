import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Faq from './components/Faq';

const Routes = (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/faq" component={Faq} />
    </div>
  </Router>
);

export default Routes;
