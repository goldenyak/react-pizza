import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router,} from "react-router-dom";
import store from "./redux/store"
import {Provider} from "react-redux"

import './scss/app.scss';

const inc = () => {
    store.dispatch({
        type: "incremented"
    })
}

store.subscribe(() => {
    console.log('изменился', store.getState())
})

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <button onClick={inc}>ДОБАВИТЬ</button>
            <Provider store={store}>
                <App/>
            </Provider>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
