import React, { Component } from 'react';
import { TabView, TabPanel } from 'primereact/tabview';
import { Fieldset } from 'primereact/fieldset';
import SelectList from './Services/SelectList';
import { SearchService } from './Services/SearchService';
import { TypeTest } from './Services/TypeTest';
import { ServiceAll } from './Services/ServiceAll';
import ServiceAxios from './axios';


export default class ServicePanel extends Component {
  render() {
    return (
      <div>
        <div className="content-section introduction">

          <div className="feature-intro">
            <h1>Les Services</h1>
            <p>Mise en place d'un texte de présentation...</p>
          </div>
        </div>

        <div className="content-section implementation">
          <TabView >

     





          <TabPanel id="4" header="ServiceALL tous les services">
              <div>
                <Fieldset legend="Selectionner le service">
             <ServiceAll />
                </Fieldset>
              </div>
            </TabPanel>




            <TabPanel header="SelectList Liste des services+ bouton">
              <SelectList />
            </TabPanel>
            
       

          </TabView>
        </div>
      </div>
    );
  }
}