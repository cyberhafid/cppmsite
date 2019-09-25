import React, { Component } from 'react';
import { ServiceActiv } from '../../components/ServiceActiv';
import {Dropdown} from 'primereact/dropdown';

export default class TypeTest extends Component {
  constructor() {
    super();
    this.state = {
      services: []
         };
    this.serviceactiv = new ServiceActiv();
  }

  componentDidMount() {

  this.serviceactiv.getServices().then(data => this.setState({ services: data }));
  //this.setState({ services });  
}

onBrandChange(event) {
  this.dt.filter(event.value, 'key', 'equals');
  this.setState({brand: event.value});
}


  render() {
    console.log('ddddddd'+JSON.stringify(this.state.services))
   // console.log('hhhh'+JSON.stringify(this.serviceactiv.getServices()))


  // <Dropdown style={{width: '100%'}}
  // value={this.state.services} options={this.state.services.map((team ) => { label=team.key, value=team.doc_count })} onChange={this.onBrandChange}/>




    return (
      <div>
      <select>
              {this.state.services.map((team) => <option label={team.key} value={team.doc_count}>{team.key}</option>)}
            </select>
          
            </div>



   
    
    );
  }
}


