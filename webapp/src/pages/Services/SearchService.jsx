import React, { Component } from 'react';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {Dropdown} from 'primereact/dropdown';

import { ServiceActiv } from '../../components/ServiceActiv';

export class SearchService extends Component {

    constructor() {
        super();
        this.state = {
            brand: null,
            addItem :''
        };
        this.serviceactiv = new ServiceActiv();
        this.onBrandChange = this.onBrandChange.bind(this);

    }

    componentDidMount() {
        this.serviceactiv.getServices().then(data => this.setState({ services: data }));
    }

    onBrandChange(event) {
        this.dt.filter(event.value, 'key', 'equals');
        this.setState({brand: event.value});
    }

 

    render() {

    


       let brands = [
                {label: 'All Brands', value: null},
                {label: 'logstash', value: "kjjhj"},
                {label: 'NetworkManager', value: 'NetworkManager'},
                {label: 'systemd', value: 'systemd'},
                {label: 'dhclient', value: 'dhclient'},
                {label: 'kernel', value: 'kernel'}
            ];

           // let brands =this.state.services.map((team) => <option label={team.doc_count} value={team.doc_count}>{team.key}</option>);
 
         //  let brands =   this.setState({ brands: [...this.state.services] })
      

         // const brands =this.state.services.map((item, label, value) => { label: item.length, value:item.key });



        let brandFilter = <Dropdown style={{width: '100%'}}
                value={this.state.services} options={brands} onChange={this.onBrandChange}/>

                console.log('ddddddd'+JSON.stringify(this.state.services))
 
        return (
        

                <div className="content-section implementation">
                    <DataTable ref={(el) => this.dt = el} value={this.state.services} paginator={true} rows={10}
                   emptyMessage="No records found">
              
                        <Column field="key" header="key" filter={true} filterElement={brandFilter} />
                        <Column field="vin" header="Vin" filter={true} />
                        <Column field="year" header="Year" filter={true} />
                      
                
                    </DataTable>
                </div>

           
        );
    }
}
