import React, { Component, Fragment } from 'react';
import { PanelComponent } from '../components/panel/panel.component';
import './home.page.css';

export class HomePage extends Component {
    render() {
        return (
            <Fragment>
                <img class="background-image" alt="white partial background" />
                <PanelComponent />
            </Fragment>
        )
    }
}