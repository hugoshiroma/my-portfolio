import React, { useRef, useEffect, useState, createRef } from "react";
import "./style.scss";
import { panelAnimation } from "../../animations/panel.animation";
import { titleAnimation } from "../../animations/title.animation";
import { descriptionAnimation } from "../../animations/description.animation";
import { personalPhoto } from "../../assets/assets-urls.enum";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const defaultValues = {
  panelAnimationDirInverted: false,
};

export const PanelComponent = ({ type, animations, experiences = [] }) => {
  const { panelAnimationDirInverted } = animations
    ? { ...animations }
    : defaultValues;
  const [sections, setSectionsRef] = useState([]);
  let introContainer = useRef();
  let introMainRow = useRef();
  let introDescription = useRef();

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
        descriptionAnimation(introDescription);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    panelAnimation(introContainer, panelAnimationDirInverted);
    animateByType();
  }, [introContainer, introMainRow, introDescription]);

  const renderContent = () => {
    switch (type) {
      case "personal-info":
        return (
          <div className="row" ref={(el) => (introMainRow = el)}>
            <div className="main-img">
              <img src={personalPhoto} alt="myself :)" />
            </div>
            <div className="row" id="basic-info">
              <h2 className="title">Hugo Gaio Shiroma</h2>
              <br />
              <FontAwesomeIcon icon="map-marker-alt"></FontAwesomeIcon>
              <p className="subtitle">Vila Carrão - São Paulo, SP</p>
              <br />
              <FontAwesomeIcon icon="heart" />
              <p className="subtitle">Solteiro</p>
              <br />
              <FontAwesomeIcon icon="child" />
              <p className="subtitle">24 anos</p>
              <br />
            </div>
          </div>
        );
      case "list":
        return (
          <div className="subtitle" ref={(el) => (introDescription = el)}>
            <ul>
              <li>Engenheiro de software front-end</li>
              <li>
                <hr />
                Apaixonado por designs modernos
              </li>
              <li>
                <hr />
                Entusiasta de padrões lógicos de UX/UI
              </li>
            </ul>
          </div>
        );
      case "timeline":
        return (
          <div className="container" ref={(el) => (introDescription = el)}>
            <div id="timeline">
              {experiences.map(
                (
                  {
                    job,
                    company,
                    startDate,
                    endDate,
                    continuation,
                    description,
                  },
                  i
                ) => (
                  <section
                    key={i}
                    style={{
                      marginTop: continuation ? `-18.5%` : i !== 0 && "5em",
                      marginLeft:
                        experiences[i].continuation &&
                        sections[i - 1] &&
                        sections[i - 1].current
                          ? `${sections[i - 1].current.scrollWidth}px`
                          : "0",
                    }}
                    ref={sections[i]}
                  >
                    {continuation && (
                      <div
                        className="row bracket"
                        style={{ marginLeft: "13px" }}
                      >
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
                    <div className="row bracket">{"{"}</div>
                    <div className="row">
                      <h3>{job}</h3>
                      <h4 className="subtitle">{company}</h4>
                      <h4 className="subtitle">{`${startDate} à ${endDate}`}</h4>
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
        );
      default:
        return;
    }
  };

  return (
    <>
      <div className="glass-panel" ref={(el) => (introContainer = el)}>
        {renderContent()}
      </div>
    </>
  );
};
