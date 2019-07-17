import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home/Home';
import Events from './Events/Events';
import Contact from './Contact/Contact';

export default function Main() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/events" component={Events} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </div>
  )
}
