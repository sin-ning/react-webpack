/**
 * Created by sin on 16/9/13.
 *
 * Main Layout
 */

import React, { Component, createElement, cloneElement } from 'react';
import styles from './MainLayout.less';

export default class MainLayout extends Component {


    render() {
        return (
            <mainLayout className={`${styles.mainLayout}`}>
                main layout ..
            </mainLayout>
        );
    }
}