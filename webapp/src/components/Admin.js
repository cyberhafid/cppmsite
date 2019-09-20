import React, { Component } from 'react';

import MenuLeft from './menuleft';
import AdminRouter from '../routes/AdminRouter';

export default class Admin extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="layout-wrapper">
          <div className="layout-topbar">
          </div>
          <div className="layout-sidebar">
            <MenuLeft />
          </div>
          <div className="layout-content">
            <AdminRouter />
            <div className="layout-footer">
            </div>
          </div>
        </div>
      </React.Fragment >
    );
  }
}
