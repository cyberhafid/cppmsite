import React, { Component } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { TabView, TabPanel } from 'primereact/tabview';
import { Fieldset } from 'primereact/fieldset';
import { LevelService } from '../components/LevelService';
import {InputSwitch} from 'primereact/inputswitch';
import {
  Link
} from 'react-router-dom';


export default class LevelPanel extends Component {
  constructor() {
    super();
    this.state = {
     
    };
    this.levelservice = new LevelService();
  }

  componentDidMount() {
  this.levelservice.getUsers().then(data => this.setState({ users: data }));
  }

  actionTemplate(rowData, column) {
    return <div>
      <Button type="button" icon="pi pi-search" className="p-button-success" style={{ marginRight: '.5em' }}></Button>

    <Link to={'/admin/usernew/'}><Button type="button" icon="pi pi-pencil" className="p-button-warning" style={{ marginRight: '.5em' }}></Button></Link>
      <Button type="button" icon="pi pi-times" className="p-button-danger"></Button>
    </div>;
  }

  actionValid(rowData, column) {
    return <div>

<InputSwitch onLabel="Yes" />
    </div>;
  }

 
  render() {
    console.log('ddddddd'+JSON.stringify(this.state.users))
    console.log('hhhh'+JSON.stringify(this.levelservice.getUsers()))
    return (
     
     <div>
          <div className="content-section introduction">
            <div className="feature-intro">
              <h1>Les feeeeServices</h1>
              <p>Mise en place d'un texte de présentation...</p>
            </div>
          </div>

          <div className="content-section implementation">
            <TabView>
              <TabPanel header="Derniers Inscrits">
                <div>
                  <Fieldset legend="En cours">
                    <p>Fiche Update , Lien vers Particpants, </p>

                    <DataTable value={this.state.users}>
                      <Column field="id" header="Nom" />
                      <Column field="key" header="Prenom" />
                      <Column field="lastName" header="ville" />
                      <Column field="email" header="mail" />
                      <Column body={this.actionTemplate} style={{ textAlign: 'center', width: '12em' }}  header="action" />
                      <Column body={this.actionValid} style={{ textAlign: 'center', width: '5em' }}  header="actif"/>
                    </DataTable>
                  </Fieldset>
                </div>
              </TabPanel>

         
             </TabView>
          </div>
          </div>
   
    );
  }
}


