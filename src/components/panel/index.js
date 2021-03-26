import React, { useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { panelAnimation } from "animations/panel.animation";
import { titleAnimation } from "animations/title.animation";
import { descriptionAnimation } from "animations/description.animation";
import { personalPhoto } from "assets/assets-urls.enum";

import "./style.scss";

const defaultValues = {
  panelAnimationDirInverted: false,
};

const Panel = ({ type, animations }) => {
  const { panelAnimationDirInverted } = animations
    ? { ...animations }
    : defaultValues;
  let introPanel = useRef();
  let introContainer = useRef();
  let introDescription = useRef();

  const animateByType = () => {
    switch (type) {
      case "personal-info":
        titleAnimation(introContainer);
        break;
      case "list":
        descriptionAnimation(introDescription);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    panelAnimation(introPanel, panelAnimationDirInverted);
    animateByType();
  }, [introPanel, introContainer, introDescription, panelAnimationDirInverted]);

  const renderContent = () => {
    switch (type) {
      case "personal-info":
        return (
          <div
            className="row"
            ref={(el) => {
              introContainer = el;
            }}
          >
            <div className="main-img">
              <img src={personalPhoto} alt="myself :)" />
            </div>
            <div className="row" id="basic-info">
              <h2 className="title">Hugo Gaio Shiroma</h2>
              <br />
              <div className="line">
                <FontAwesomeIcon icon="map-marker-alt" />
                <p className="subtitle">Vila Carrão - São Paulo, SP</p>
              </div>
              <div className="line">
                <FontAwesomeIcon icon="phone-alt" />
                <p className="subtitle">55 11 99673-1201</p>
              </div>
              <div className="line">
                <FontAwesomeIcon icon="heart" />
                <p className="subtitle">Solteiro</p>
              </div>
              <div className="line">
                <FontAwesomeIcon icon="child" />
                <p className="subtitle">24 anos</p>
              </div>
            </div>
          </div>
        );
      case "list":
        return (
          <div
            className="subtitle"
            ref={(el) => {
              introDescription = el;
            }}
          >
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
      default:
        return (
          <div
            className="row"
            ref={(el) => {
              introContainer = el;
            }}
          >
            Em construção
          </div>
        );
    }
  };

  return (
    <>
      <div
        className="glass-panel"
        ref={(el) => {
          introPanel = el;
        }}
      >
        {renderContent()}
      </div>
    </>
  );
};

export default Panel;