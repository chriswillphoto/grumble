import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home';
import Faves from './components/Faves';
import Restaurant from './components/Restaurant';

const Routes = (
  <Router>
    <div>
      <Route exact path="/" component={ Home } />
      <Route exact path="/faves" component={ Faves } />
      <Route exact path="/restaurant" component={ Restaurant } />
      <Route path="/restaurant/:restaurantId" component={ Restaurant } />
    </div>
  </Router>
)




export default Routes;
