import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import './css/styles.css';

import React from 'react';
import ReactDom from 'react-dom';

import {Grid, Row, Col} from  'react-bootstrap';

import Chat from './Chat/Chat.jsx';

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import messageApp from './Chat/reducers/reducers.jsx'
let store = createStore(messageApp)

class App extends React.Component {
  render () {
    return (
      <div>
        <Grid>
          <Row>
            <Col className="header">
              <h2>prattle.js</h2>
            </Col>
            <Col className="content">
              <Provider store={store}>
                <Chat />
              </Provider>
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
