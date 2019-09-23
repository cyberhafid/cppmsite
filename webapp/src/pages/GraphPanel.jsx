import React, { Component } from 'react';
import { TabView, TabPanel } from 'primereact/tabview';
import { Fieldset } from 'primereact/fieldset';
import { PieChart } from './Graphiques/PieChart';
import { LineChart } from './Graphiques/LineChart';
import { BarChart } from './Graphiques/BarChart';
import { ComboChart } from './Graphiques/ComboChart';
export default class GraphPanel extends Component {
  render() {
    return (
        <div>
        <div className="content-section introduction">


        </div>

        <div className="content-section implementation">
          <TabView >
            <TabPanel header="PieChart">
     <PieChart />
            </TabPanel>
            <TabPanel header="LineChart">
              <div>
                <Fieldset legend="En cours">
                <LineChart />
                </Fieldset>
              </div>
            </TabPanel>
            <TabPanel header="Bar Chart">
              <div>
                <Fieldset legend="En cours">
                <BarChart />
                </Fieldset>
              </div>
            </TabPanel>
            <TabPanel id="4" header="Combo Chart">
              <div>
                <Fieldset legend="Remplir les champs suivants">
                <ComboChart />
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