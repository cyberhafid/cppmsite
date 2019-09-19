import React, { Component } from 'react';


import { Row, Col } from 'reactstrap';


export default class Home extends Component {
  render() {
    return (
      <div>
       
        <div className="container-fluid backg">
         
          <Row>
            <Col sm="3">
            <h2 className="title-table">Matchs of the day</h2>
            </Col>
            <Col sm="6">
            <div>
    <h2 className="title-table">Matchs of the day</h2>
  
    <h2 className="title-table">Results</h2>

    <h2 className="title-table">Upcoming matchs</h2>
  
  </div>
            </Col>
            <Col sm="3">
           
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}