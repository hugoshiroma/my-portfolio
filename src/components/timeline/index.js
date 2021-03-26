import React, { useRef, useEffect, useState, createRef } from "react";

import { panelAnimation } from "animations/panel.animation";
import { titleAnimation } from "animations/title.animation";
import { descriptionAnimation } from "animations/description.animation";

import "./style.scss";

const defaultValues = {
  panelAnimationDirInverted: false,
};

const Timeline = ({
  type,
  animations,
  onSelect,
  selected,
  experiences = [],
}) => {
  const { panelAnimationDirInverted } = animations
    ? { ...animations }
    : defaultValues;
  const [sections, setSectionsRef] = useState([]);
  let introPanel = useRef();
  let introMainRow = useRef();
  let introContainer = useRef();

  const setExpSections = async () => {
    if (sections.length === 0) {
      for (let i = experiences.length; i >= 0; i--) {
        await setSectionsRef((_sections) => {
          return [..._sections, createRef()];
        });
      }
    }
  };

  setExpSections();

  const animateByType = () => {
    switch (type) {
      case "personal-info":
        titleAnimation(introMainRow);
        break;
      case "list":
        descriptionAnimation(introContainer);
        break;
      default:
        break;
    }
  };

  const handleSelected = (jobSelected, companySelected) => {
    if (
      selected &&
      jobSelected === selected.job &&
      companySelected === selected.company
    ) {
      return "selected";
    }

    return "";
  };

  const handleSelect = (job, company, description, photos) => {
    onSelect(job, company, description, photos);
  };

  useEffect(() => {
    panelAnimation(introPanel, panelAnimationDirInverted);
    animateByType();
  }, [introPanel, introMainRow, introContainer, panelAnimationDirInverted]);

  return (
    <>
      <div
        className="glass-panel"
        ref={(el) => {
          introPanel = el;
        }}
      >
        <div
          id="timeline"
          className="container"
          ref={(el) => {
            introContainer = el;
          }}
        >
          {experiences.map(
            (
              {
                job,
                company,
                startDate,
                endDate,
                continuation,
                description,
                photos,
              },
              i
            ) => (
              <section
                key={i}
                style={{
                  marginTop: continuation
                    ? window.innerWidth < 768
                      ? "-4em"
                      : "-14.35%"
                    : i !== 0 && "5em",
                  marginRight: continuation ? "2em" : 0,
                  marginLeft:
                    experiences[i].continuation &&
                    sections[i - 1] &&
                    sections[i - 1].current
                      ? `${sections[i - 1].current.scrollWidth + 32}px`
                      : "0",
                }}
              >
                {continuation && (
                  <div className="bracket" style={{ marginLeft: "13px" }}>
                    {"}"}
                  </div>
                )}
                <svg
                  className="checkpoint"
                  height="32"
                  width="32"
                  style={{ marginLeft: continuation ? "60px" : 0 }}
                >
                  <circle
                    cx="16"
                    cy="16"
                    r="5"
                    stroke="black"
                    strokeWidth="10"
                    left="0"
                    top="0"
                    fill="white"
                  />
                </svg>
                <div
                  className={`content ${handleSelected(job, company)}`}
                  onClick={() => handleSelect(job, company, description, photos)}
                  ref={sections[i]}
                >
                  <div className="bracket">{"{"}</div>
                  <div className="row">
                    <h3>{job}</h3>
                    <h4 className="subtitle">{company}</h4>
                    <h4 className="subtitle">{`${startDate} à ${endDate}`}</h4>
                  </div>
                </div>
                {(i !== experiences.length - 2 || continuation) && (
                  <svg
                    className="mainline"
                    height={continuation ? 8 : 156}
                    width={continuation ? 65 : 8}
                    style={{
                      top: continuation && "50%",
                      transform: continuation && "translate(110%, -50%)",
                      marginLeft: continuation && 0,
                      marginTop: continuation && 0,
                    }}
                  >
                    <line
                      x1="0"
                      y1="0"
                      x2={continuation ? 100 : 0}
                      y2={continuation ? 0 : 156}
                    />
                  </svg>
                )}
              </section>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default Timeline;
