import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home/index';
import Car from '../pages/Car/index';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/cars/:id" component={Car} />
    </Switch>
  );
};

export default Routes;
