import React from 'react';
import ReactDOM from 'react-dom';
import {App} from 'App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import {RootStoreType, store} from "./store";

ReactDOM.render(

  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
