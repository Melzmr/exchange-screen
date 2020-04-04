import React from 'react';
import ReactDOM from 'react-dom';
import './main/index.css';
import {ExchangePage} from './main/pages/exchange-page/ExchangePage';
import {store} from './main/core/createStore';
import {Provider} from 'react-redux';

ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <ExchangePage/>
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
