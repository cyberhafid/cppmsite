import React, { Component } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Dropdown } from 'primereact/dropdown';
import axios from 'axios';
import { ServiceActiv } from '../../components/ServiceActiv';

export class ServiceAll extends Component {

    constructor() {
        super();
        this.state = {
            brands: null,
            brand: null,
            loading: false,
            services: [],
            logsall: []
        };
        this.serviceactiv = new ServiceActiv();
        this.onBrandChange = this.onBrandChange.bind(this);
        this.getLogServices = this.getLogServices.bind(this);
    }

    componentDidMount() {
        this.serviceactiv.getServices().then(data => this.setState({ services: data }));
    }

    async onBrandChange(event) {
        this.dt.filter(event.value, 'label', 'equals');
        await this.setState({ brands: event.target.value });
        await this.getLogServices(event.target.value);
    }


    getLogServices(league) {
        setTimeout(() => {
            this.getLogServices(league);
        }, 5000);

        axios
            .get(`http://marc.in2p3.fr:8080/api/v0/msgs/${league}?n=15`)
            .then(res => {
                const logsall = res.data;
                this.setState({ logsall });
            });
    }


    actionTemplate(rowData, column) {
        return <span style={{ textAlign: 'left' }} >  {rowData.message + rowData.spacer + rowData.varmessage}</span>;
    }

    render() {
        let brand = this.state.services.map((icon) => {
            return { label: icon, value: icon };
        });

        var header = <div style={{ 'textAlign': 'left' }}  >
            Choisir  : <Dropdown style={{ width: '50%' }}
                value={this.state.brands} options={brand} onChange={this.onBrandChange} />
        </div>;

        return (
            <div className="content-section implementation" >
                <DataTable ref={(el) => { this.dt = el }} value={this.state.logsall} responsive={true} paginator={true} rows={10}
                    emptyMessage="No records found" header={header} >
                    <Column field="asctime" header="date" style={{ width: '160px' }} />
                    <Column field="levelname" header="level" style={{ width: '75px' }} />
                    <Column field="customname" header="service" style={{ width: '14%' }} />
                    <Column header="message" body={this.actionTemplate} />
                </DataTable>
            </div>
        );
    }
}
