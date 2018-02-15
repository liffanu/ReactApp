// @flow

import React from 'react';
import { Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import AsyncRoute from './AsyncRoute';
import store from './store';


const App = () => (
  <Provider store={store}>
    <div className="app">
      <Route exact path="/" component={props => <AsyncRoute props={props} loadingPromise={import('./Landing')} />} />

    </div>
  </Provider>
);

export default App;