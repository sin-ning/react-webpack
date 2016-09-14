/**
 * Created by sin on 16/9/9.
 *
 * routs
 */

import React, { Component, PropTypes } from 'react';
import {Router, Route} from 'react-router';
// import App from '../components/App';
// import Home from '../components/Home';
// import Page404 from '../components/Page404';


const routes = {
    childRoutes: [
        { path: '/404',
            getComponent: (nextState, cb) => {
                require.ensure([], (require) => {
                    cb(null, require('../components/Page404').default)
                })
            }
        },
        { path: '/',
            getComponent: (nextState, cb) => {
                require.ensure([], (require) => {
                    cb(null, require('../components/Home').default)
                })
            }
        }
    ]
};


function Routes({ history }) {
    return (
        <Router
            history={history}
            routes={routes}
        />
    );
}



Routes.propTypes = {
    history: PropTypes.any,
};

export default Routes;
