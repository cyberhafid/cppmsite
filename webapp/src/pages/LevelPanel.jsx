import React, { Component } from 'react';

import axios from 'axios';

  export default class PersonList extends Component {
    state = {
      persons: []
    }
  
    componentDidMount() {
      axios.get("http://localhost:5000/indice/service"
      ,   )
        .then(res => {
          const persons = res.data.hits.hits;
          this.setState({ persons });
        })
    }
  
    render() {
       console.log('hhhh'+JSON.stringify(this.state.persons))
      return (
        <ul>
          { this.state.persons.map(person => <li>{person}</li>)}
        </ul>
      )
    }
  }
  