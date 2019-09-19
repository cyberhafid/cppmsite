import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Contact from '../pages/Contact';

export default class Routeur extends Component {
  render() {
    return (
        <Switch>
        <Route exact path="/" component={Home} />

        <Route path="/contact" component={Contact} />
      </Switch>
    )
  }
}