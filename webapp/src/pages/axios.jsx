import React, { Component } from 'react';

import axios from 'axios';

  export default class PersonList extends Component {
    state = {
      persons: []
    }
  
    componentDidMount() {
      axios.get("http://localhost:5000/indice/leveltrihouse"
      ,   )
        .then(res => {
          const persons = res.data.aggregations.process.buckets;
          this.setState({ persons });
        })
    }
  
    render() {
       console.log('hhhh'+JSON.stringify(this.state.persons))
      return (
        <ul>
          { this.state.persons.map(person => <li>{person.key}</li>)}
        </ul>
      )
    }
  }
  