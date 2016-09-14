/**
 * Created by sin on 16/9/9.
 *
 * home
 */

import React, { Component } from 'react';
import { Link } from 'react-router';
import ReactDom from 'react-dom';

import Fas from './Fas';


export default class App extends Component {

    render() {
        return (
            <div>
                <Link to="/">Home</Link>
                <br />
                <Link to="/404">404</Link>
            </div>
        );
    }
}
