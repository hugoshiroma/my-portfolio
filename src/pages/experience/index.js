import React from "react";

import { PanelComponent } from "../../components/panel";
import { experiences } from './config';
import "./style.scss";

export const ExperiencePage = () => {
  return (
    <>
      <div id="my-experience">
        <PanelComponent
          type="timeline"
          experiences={experiences}
          animations={{ panelAnimationDirInverted: true }}
        />
        <div className="description"></div>
      </div>
    </>
  );
};
