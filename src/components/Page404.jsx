/**
 * Created by sin on 16/9/9.
 *
 * 404
 */

import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Page404 extends Component {

    render() {

        return (
            <div>
                <h1>404</h1>
                <Link to="/">Home</Link>
            </div>
        );
    }
}