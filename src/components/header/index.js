import React, { useRef, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { headerAnimation } from "animations/header.animation";
import { Button, Sidebar } from "components";
import { helpers } from "utils";

import "./style.scss";

const { isMobile } = helpers;

const Header = ({ links }) => {
  const [sidebarToggled, toggleSidebar] = useState(false);
  let introHeader = useRef(null);

  useEffect(() => {
    headerAnimation(introHeader);
  }, []);

  return (
    <>
      <header
        className="container"
        ref={(el) => (introHeader = el)}
        style={
          isMobile()
            ? {
                background: "rgba(0, 0, 0, 0)",
                backdropFilter: "none",
                boxShadow: "none",
              }
            : {}
        }
      >
        {!isMobile() &&
          links &&
          links.map(({ to, content }) => (
            <NavLink key={content} to={to} data-content={content} exact>
              {content}
            </NavLink>
          ))}
        {isMobile() && (
          <Button onClick={() => toggleSidebar(!sidebarToggled)}>
            <FontAwesomeIcon size="4x" icon="bars" />
          </Button>
        )}
      </header>
      {sidebarToggled && (
        <Sidebar
          links={links}
          onBlur={() => toggleSidebar(false)}
          toggled={sidebarToggled}
        />
      )}
    </>
  );
};

export default Header;
