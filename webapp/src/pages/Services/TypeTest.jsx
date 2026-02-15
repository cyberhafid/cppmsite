import React, { Component } from 'react';
import { ServiceActiv } from '../../components/ServiceActiv';
import axios from 'axios';

export  class TypeTest extends Component {
  constructor() {
    super();
    this.state = {
      persons: [],
      services: []
         };
    this.serviceactiv = new ServiceActiv();
  }

  componentDidMount() {

 // this.serviceactiv.getLogServices().then(data => this.setState({ services: data}));

 this.getser();

  console.log(JSON.stringify('didmount'+this.state.persons))
  //this.setState({ services });  
}

getser(){
axios.get("http://marc.in2p3.fr:8080/api/v0/msgs/WorkloadManagement/SiteDirectorBiomed-1", 
)
 .then(res => {
   const persons = res.data;
   this.setState({ persons });
   console.log('pkoiiii'+ persons);
 })
 .catch((error) => {console.log('heeeere',error);})
 ;   
}





onBrandChange(event) {
  this.dt.filter(event.value, 'key', 'equals');
  this.setState({brand: event.value});
}


  render() {
    console.log(JSON.stringify('render'+this.state.persons))
  

  // <Dropdown style={{width: '100%'}}
  // value={this.state.services} options={this.state.services.map((team ) => { label=team.key, value=team.doc_count })} onChange={this.onBrandChange}/>




    return (
      <div>
 
            <ul>
          { this.state.persons.map(person => <li>{person.componentname}</li>)
          }
        </ul>
            </div>



   
    
    );
  }
}


