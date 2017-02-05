import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import './css/styles.css';

import React from 'react';
import ReactDom from 'react-dom';

import {Grid, Row, Col} from  'react-bootstrap';

import Chat from './Chat.jsx';

class App extends React.Component {
  render () {
    return (
      <div>
        <Grid>
          <Row>
            <Col>
              <h2>prattle.js</h2>
            </Col>
            <Col>
              <Chat />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

ReactDom.render(
  <App />,
  document.getElementById('app'));
