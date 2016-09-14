/**
 * Created by sin on 16/9/12.
 */

import React, { Component } from 'react';


export default class Fas extends Component {

    constructor() {
        super(...arguments);

        console.log(this.props);
    }

    componentWillReceiveProps(nextProps) {

        this.setState({context: nextProps.hover ? '123' : '321'});
    }

    state = {
        context: '321',
    };

    render() {
        return (
            <div>
                { this.props.hover }
                { this.state.context }
            </div>
        );
    }
}

