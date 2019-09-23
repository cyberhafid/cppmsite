import React, { Component } from 'react';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {Dropdown} from 'primereact/dropdown';

import { ServiceActiv } from '../../components/ServiceActiv';

export class ServiceAll extends Component {

    constructor() {
        super();
        this.state = {
            brandshh: null,
            brand: null,
            services :[],
            logsall: []
            
        };
        this.serviceactiv = new ServiceActiv();
        this.onBrandChange = this.onBrandChange.bind(this);

    }

    componentDidMount() {
        this.serviceactiv.getServices().then(data => this.setState({ services: data }));
        this.serviceactiv.getLogServices().then(data => this.setState({ logsall: data }));
    }

    onBrandChange(event) {
        this.dt.filter(event.value, '_source.process.name', 'equals');
        this.setState({brands: event.value});
    }

   
    handleChange(value) {this.setState({ selected: value });}

    //we are creating the options 


    render() {


            //let brands = this.state.services;
            let brands = this.state.services.map((icon) => {
                return { label: icon.key, value: icon.key };
              });

                let brandFilter = <Dropdown style={{width: '100%'}}
                value={this.state.logsall} options={brands} onChange={this.onBrandChange}/>
       

                console.log('aaaaaa'+JSON.stringify(this.state.logsall))
 
        return (
        

                <div className="content-section implementation">
                    <DataTable ref={(el) => this.dt = el} value={this.state.logsall} paginator={true} rows={10}
                   emptyMessage="No records found">
                        <Column field="_source.message" header="_index" filter={true}  />
                        <Column field="_source.process.name" header="Message" filter={true} filterElement={brandFilter} />
                        <Column field="_source.@timestamp" header="Year" filter={true} />
                      
                
                    </DataTable>
                </div>

           
        );
    }
}
