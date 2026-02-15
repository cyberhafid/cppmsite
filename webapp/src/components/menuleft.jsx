import React, { Component } from 'react';
import { Menu } from 'primereact/menu';


export default class MenuLeft extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          label: 'GENERAL',
          items: [{label: 'Home', icon: 'pi pi-fw pi-home', url: '/admin'},
          {label: 'Service', icon: 'pi pi-fw pi-file',url: '/admin/services' },
          {label: 'Level', icon: 'pi pi-fw pi-calendar',url: '/admin/levels'},
          {label: 'User', icon: 'pi pi-fw pi-user', url: '/admin/users'},
          {label: 'Graphiques', icon: 'pi pi-fw pi-calendar', url: '/admin/chart'}
            ]
        },
     

        {
          label: 'Api',
          items: [  {label: 'Documentation', icon: 'pi pi-fw pi-file',url: '/admin/api' }
          ]
        },
        {
          label: 'Account',
          items: [{ label: 'Configuration', icon: 'pi pi-fw pi-cog', command: () => { props.history.push('/admin/config'); } },
          { label: 'Sign Out', icon: 'pi pi-fw pi-power-off', command: () => { props.logout(); } }]
        },
      ]
    };
  }

  render() {
    return (
      <div className="layout-menu">
        <Menu model={this.state.items} />
      </div>
    );
  }
}

