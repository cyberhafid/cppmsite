import React, { Component } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Fieldset } from 'primereact/fieldset';
import { ServiceActiv } from '../../components/ServiceActiv';
import {
  Link
} from 'react-router-dom';


export default class SelectList extends Component {
  constructor() {
    super();
    this.state = {
         };
    this.serviceactiv = new ServiceActiv();
  }

  componentDidMount() {
  this.serviceactiv.getServices().then(data => this.setState({ services: data }));
  }

  actionTemplate(rowData, column) {
    return <div>
      <Button type="button" icon="pi pi-search" className="p-button-success" style={{ marginRight: '.5em' }}></Button>

    <Link to={'/admin/usernew/'}><Button type="button" icon="pi pi-pencil" className="p-button-warning" style={{ marginRight: '.5em' }}></Button></Link>
      <Button type="button" icon="pi pi-times" className="p-button-danger"></Button>
    </div>;
  }
 
  render() {
    //console.log('ddddddd'+JSON.stringify(this.state.services))
    //console.log('hhhh'+JSON.stringify(this.levelservice.getUsers()))
    return (
      
                <div>
                  <Fieldset legend="En cours">
                    <p>Fiche Update , Lien vers Particpants, </p>

                  
                    <DataTable value={this.state.services}>
                      <Column field="doc_count" header="Num" />
                      <Column field="key" header="Nom" />
        
                      <Column body={this.actionTemplate} style={{ textAlign: 'center', width: '12em' }}  header="action" />
              
                    </DataTable>
                  </Fieldset>
                </div>
             
   
    );
  }
}


