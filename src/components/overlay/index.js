import React from "react";

import "./style.scss";

const Overlay = ({ onBlur, onAnimate }) => (
  <div ref={onAnimate} onClick={onBlur} className="overlay"></div>
);

export default Overlay;
