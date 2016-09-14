/**
 * Created by sin on 16/9/9.
 *
 * 入口文件
 */

import './index.html';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer as routing } from 'react-router-redux';
import reducers from '../reducers/index';
import SagaManager from '../sagas/SagaManager';
// import './index.less';
import Routes from '../routes/index';


// Init State
// const initialState = window.__INITIAL_STATE__;

///
/// Create Store

const sagaMiddleware = createSagaMiddleware();
const initialState = {};
const enhancer = compose(
    applyMiddleware(sagaMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(combineReducers({
    ...reducers, routing,
}), initialState, enhancer);


///
/// Create History

const history = syncHistoryWithStore(browserHistory, store);
SagaManager.startSagas(sagaMiddleware);





///
/// Render React Routes and Redux

const render = () => {

    ReactDOM.render(
        <Provider store={store}>
            <Routes history={history} />
        </Provider>
    , document.getElementById('root'));

    // ReactDOM.render(
    //     <div>
    //         xx bb pp xx
    //     </div>
    // , document.getElementById('root'));
};

///
/// init

render();