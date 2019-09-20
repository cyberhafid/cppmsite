import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import Admin from '../components/Admin';
export default class AppRouter extends Component {
  render() {
    return (
        <Switch>
    
           <Route exact to='/admin' component={Admin} />
                  
      </Switch>
    )
  }
}