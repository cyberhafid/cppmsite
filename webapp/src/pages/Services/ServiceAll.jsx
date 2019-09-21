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
            brand: null
            
        };
        this.serviceactiv = new ServiceActiv();
        this.onBrandChange = this.onBrandChange.bind(this);

    }

    componentDidMount() {
        this.serviceactiv.getServices().then(data => this.setState({ services: data }));
        this.serviceactiv.getLogServices().then(data => this.setState({ logsall: data }));
    }

    onBrandChange(event) {
        this.dt.filter(event.value, 'key', 'equals');
        this.setState({brand: event.value});

        
    }

 

    render() {

           console.log('ddddddd'+JSON.stringify(this.state.logsall))


        let brandshh = [
                {label: 'All Brands', value: null},
                {label: 'logstash', value: "logstash"},
                {label: 'NetworkManager', value: 'NetworkManager'},
                {label: 'systemd', value: 'systemd'},
                {label: 'dhclient', value: 'dhclient'},
                {label: 'kernel', value: 'kernel'}
            ];

            let brands = this.state.services;


        let brandFilter = <Dropdown style={{width: '100%'}}
                value={this.state.brand} options={brands} onChange={this.onBrandChange}/>

 
        return (
        

                <div className="content-section implementation">
                    <DataTable ref={(el) => this.dt = el} value={this.state.logsall} paginator={true} rows={10}
                   emptyMessage="No records found">
                        <Column field="_source.message" header="_index" filter={true} filterElement={brandFilter} />
                        <Column field="_source.process.name" header="Message" filter={true} />
                        <Column field="_source.@timestamp" header="Year" filter={true} />
                      
                
                    </DataTable>
                </div>

           
        );
    }
}
