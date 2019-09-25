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
        this.dt.filter(event.value, [0], 'equals');
        this.setState({brands: event.value});
    }

   
    handleChange(value) {this.setState({ selected: value });}

    //we are creating the options 



    actionTemplate(rowData, column) {
        return <span> {rowData.message + rowData.spacer + 'var'+ rowData.varmessage}</span>;
    }




    render() {


            //let brands = this.state.services;
            let brands = this.state.services.map((icon) => {
               return { label: icon, value: icon };
              });

                let brandFilter = <Dropdown style={{width: '100%'}}
                value={this.state.logsall} options={brands} onChange={this.onBrandChange}/>
       

                console.log('logs'+JSON.stringify(this.state.logsall))
 
        return (
        

                <div className="content-section implementation" >
                    <DataTable ref={(el) => this.dt = el} value={this.state.logsall} paginator={true} rows={10}
                   emptyMessage="No records found" >
                                
                        <Column field="asctime" header="date"  filter={true}  style={{width:'20%', fontWeight:'bold'}}/>
                        <Column field="customname" header="service"  filter={true} filter={true} filterElement={brandFilter}  style={{width:'10%'}} />
                        <Column field="levelname" header="level"  filter={true} style={{width:'10%'}} />
                        <Column body={this.actionTemplate} style={{textAlign:'center', width: '60%'}}/>
                    </DataTable>
                </div>

           
        );
    }
}
