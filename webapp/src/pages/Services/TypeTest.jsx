import React, { Component } from 'react';
import { ServiceActiv } from '../../components/ServiceActiv';


export default class TypeTest extends Component {
  constructor() {
    super();
    this.state = {
      services: []
         };
    this.serviceactiv = new ServiceActiv();
  }

  componentDidMount() {

  this.serviceactiv.getLogServices().then(data => this.setState({ services: data }));
  //this.setState({ services });  
}

  render() {
    console.log('ddddddd'+JSON.stringify(this.state.services))
   // console.log('hhhh'+JSON.stringify(this.serviceactiv.getServices()))
    return (

      <ul>
      {  console.log('ddddddd'+JSON.stringify(this.state.services)) }

    </ul>
    
    );
  }
}


