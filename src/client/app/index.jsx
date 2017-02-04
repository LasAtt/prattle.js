import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import ReactDom from 'react-dom';

import {Grid, Row, Col} from  'react-bootstrap';


import AwesomeComponent from './AwesomeComponent.jsx';


class App extends React.Component {
  render () {
    return (
      <div>
        <Grid>
          <Row>
            <Col>
              <h2>Hi React!</h2>
            </Col>
            <Col>
              <AwesomeComponent />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

ReactDom.render(
  <App/>,
  document.getElementById('app'));
