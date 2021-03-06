import React, { Component } from 'react';
import { TabView, TabPanel } from 'primereact/tabview';
import { Fieldset } from 'primereact/fieldset';

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
            <TabPanel header="Tous les Services">
         
            </TabPanel>
            <TabPanel header="attente de validation">
              <div>
                <Fieldset legend="En cours">
                </Fieldset>
              </div>
            </TabPanel>
            <TabPanel header="Services bannis">
              <div>
                <Fieldset legend="En cours">
                </Fieldset>
              </div>
            </TabPanel>
            <TabPanel id="4" header="Ajouter">
              <div>
                <Fieldset legend="Remplir les champs suivants">
          
                </Fieldset>
              </div>
            </TabPanel>
            <TabPanel id="4" header="Modifier">
              <div>
                <Fieldset legend="Remplir les champs suivants">
            
                </Fieldset>
              </div>
            </TabPanel>
          </TabView>
        </div>
      </div>
    );
  }
}