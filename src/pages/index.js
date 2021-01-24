import React, { Component, Fragment } from 'react';
import { PanelComponent } from '../components/panel/index';
import './style.scss';

export class HomePage extends Component {
    render() {
        return (
            <Fragment>
                <img className="background-image" alt="white partial background" />
                <PanelComponent />
            </Fragment>
        )
    }
}