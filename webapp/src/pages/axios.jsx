import React, { Component } from 'react';

import axios from 'axios';

  export default class ServiceAxios extends Component {
    state = {
      persons: []
    }
  
    componentDidMount() {
      axios.get("http://134.158.21.55:5000/indice/service", 
       )
        .then(res => {
          const persons = res.data;
          this.setState({ persons });
          console.log('pkoiiii'+ persons );
        })
        .catch((error) => {console.log('heeeere',error);})
        ;   
    }
  






    render() {
       console.log('hhhh'+JSON.stringify(this.state.persons))
      return (
        <ul>
          { this.state.persons.map(person => <li>{person._index}</li>)}
        </ul>
      )
    }
  }
  