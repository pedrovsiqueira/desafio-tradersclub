import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home/index';
import Car from '../pages/Car/index';
import NewCar from '../pages/NewCar/index';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/cars/new" component={NewCar} />
      <Route path="/cars/:id" component={Car} />
    </Switch>
  );
};

export default Routes;
