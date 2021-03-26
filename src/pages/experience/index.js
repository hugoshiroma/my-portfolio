import React, { useState, useRef, useEffect } from "react";

import { Gallery, Timeline } from "components";
import { panelAnimation } from "animations/panel.animation";
import { scroll } from "animations/scrollto";

import { experiences } from "./config";
import "./style.scss";

export const ExperiencePage = () => {
  const [selected, select] = useState(null);
  let introDescription = useRef();

  useEffect(() => {
    panelAnimation(introDescription);
    if (selected) {
      scroll(introDescription);
    }
  }, [selected, introDescription]);

  const handleSelect = (job, company, description, photos) => {
    select({ job, company, description, photos });
  };

  const handleDescription = () =>
    window.innerWidth < 768 ? (
      <div
        id="description-content"
        className="glass-panel description"
        ref={(el) => {
          introDescription = el;
        }}
      >
        <h3>{`${selected.job} - ${selected.company}`}</h3>
        <p>{selected.description}</p>
        <div className="container-photos">
          {selected.photos && <Gallery photosSrc={selected.photos} />}
        </div>
      </div>
    ) : (
      <div
        id="description-content"
        className="description"
        ref={(el) => {
          introDescription = el;
        }}
      >
        <h3>{`${selected.job} - ${selected.company}`}</h3>
        <p>{selected.description}</p>
        <div className="container-photos">
          {selected.photos && <Gallery photosSrc={selected.photos} />}
        </div>
      </div>
    );

  return (
    <>
      <div id="my-experience">
        <Timeline
          experiences={experiences}
          animations={{ panelAnimationDirInverted: true }}
          onSelect={handleSelect}
          selected={selected}
        />
        {selected && handleDescription()}
      </div>
    </>
  );
};
