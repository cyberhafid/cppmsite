import React, { Component } from 'react';
import { TabView, TabPanel } from 'primereact/tabview';
import { Fieldset } from 'primereact/fieldset';
import SelectList from './Services/SelectList';
import { SearchService } from './Services/SearchService';
import { TypeTest } from './Services/TypeTest';



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


          <TabPanel id="4" header="TYPESTE tous les services">
              <div>
                <Fieldset legend="Remplir les champs suivants">
             <TypeTest />
                </Fieldset>
              </div>
            </TabPanel>

          <TabPanel header="TypeTest ">
              <div>
                <Fieldset legend="En cours">
                <TypeTest  />  
                </Fieldset>
              </div>
            </TabPanel>

            <TabPanel header="SearchService ">
              <div>
                <Fieldset legend="En cours">
                <SearchService />  
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