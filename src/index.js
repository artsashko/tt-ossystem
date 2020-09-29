import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider, connect } from 'react-redux';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store, { getRole } from './store';
import { setRole } from './role';

const getData = state => ({
  getRole: getRole(state),
});

const getMethods = dispatch => ({
  setRole: (value) => dispatch(setRole(value)),
});

const ConnectedApp = connect(getData, getMethods)(App);

ReactDOM.render(
  <Provider store={store}>
      <Router>
        <Route path="/" component={ConnectedApp} />
      </Router>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
