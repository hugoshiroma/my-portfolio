import React, {  } from 'react';
import { PanelComponent } from '../../components/panel';
import './style.scss';

export const HomePage = () => {

    return (
        <>
            <div id="my-basic-infos">
                <PanelComponent type="personal-info" />
            </div>
            <div id="my-aspirations">
                <PanelComponent type="list" animations={{panelAnimationDirInverted: true}}/>
            </div>
        </>
    )
}