import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

import { Overlay } from "components";
import { fadein } from "animations/fadein";
import { fadeout } from "animations/fadeout";
import { slidein, slideout } from "animations/slidein";

import "./style.scss";

const Sidebar = ({ links, onBlur }) => {
  let overlay = useRef(null);
  let sidebar = useRef(null);

  const handleBlur = () => {
    fadeout(overlay);
    slideout(sidebar);
    setTimeout(onBlur, 1000);
  };

  useEffect(() => {
    fadein(overlay);
    slidein(sidebar);
  }, [overlay, sidebar]);

  return (
    <>
      <div className="sidebar" ref={(el) => (sidebar = el)}>
        <ul>
          {links &&
            links.map(({ to, content }, index) => (
              <NavLink
                onClick={handleBlur}
                key={content}
                to={to}
                data-content={content}
                exact
              >
                <li>
                  {index !== 0 && <hr />}
                  <span>{content}</span>
                </li>
              </NavLink>
            ))}
        </ul>
      </div>
      <Overlay onAnimate={(el) => (overlay = el)} onBlur={handleBlur} />
    </>
  );
};

export default Sidebar;
