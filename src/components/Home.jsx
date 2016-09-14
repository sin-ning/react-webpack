/**
 * Created by sin on 16/9/9.
 *
 * home
 */

import React, { Component } from 'react';
import { Link } from 'react-router';
import ReactDom from 'react-dom';
import MainLayout from '../layouts/main/MainLayout';

import Fas from './Fas';

function getStyles(props, state, context) {
    return {
        panel: {
            position: 'relative',
            display: 'inline-block',
            border: '1px solid red',
            opacity: '0.8',
            transition: 'all 500ms',
            boxShadow: state.hover ? '0 5px 15px rgba(0,0,0,0.3)' : 'none',
        }
    }
}


export default class Home extends Component {

    state = {
      hover: false,
    };

    handleMouseEnter = () => {
        this.setState({hover: true});
    };

    handleMouseLeave = () => {
        this.setState({hover: false});
    };

    componentWillMount() {
        // const thisDom = ReactDom.findDOMNode(this);
        // console.info(thisDom, this);
    }

    render() {
        console.info(this.state.hover);

        const {
            ...other,
            style
        } = this.props;

        const styles = getStyles(this.props, this.state, this.context);
        return (
            <div tabIndex={1}
                 style={ Object.assign({}, styles.panel, style) }
                 onMouseEnter={this.handleMouseEnter}
                 onMouseLeave={this.handleMouseLeave}>

                <h1>Home Page!</h1>
                123
                <br />
                <Link to="404">404</Link>

                <MainLayout />
                <Fas hover={this.state.hover} />
            </div>
        );
    }
}
