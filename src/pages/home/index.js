import React from "react";

import { Panel } from "components";

import "./style.scss";

export const HomePage = () => {
  return (
    <>
      <div id="my-basic-infos">
        <Panel type="personal-info" />
      </div>
      <div id="my-aspirations">
        <Panel type="list" animations={{ panelAnimationDirInverted: true }} />
      </div>
    </>
  );
};
