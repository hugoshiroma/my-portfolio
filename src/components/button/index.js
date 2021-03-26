import React, { useRef, useEffect } from "react";

import { slidein } from "animations/slidein";

import "./style.scss";

const Button = ({ children, onClick }) => {
  let introButton = useRef();

  useEffect(() => {
    // slidein(introButton);
  }, [introButton]);

  return (
    <button
      ref={(el) => {
        introButton = el;
      }}
      className="button"
      onClick={onClick}
    >
      <div className="button__content">
        <div className="button__icon">{children}</div>
      </div>
    </button>
  );
};

export default Button;
