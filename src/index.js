import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import { createStore } from 'redux'
import myApp from './Redux/Reducers'
import { Provider } from 'react-redux'

let store = createStore(
    myApp,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>
    , document.getElementById('root')
);

