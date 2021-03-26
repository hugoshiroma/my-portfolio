import React, { useEffect, useRef } from "react";

import { contrast } from "animations/contrast";
import { size } from "animations/size";

import "./style.scss";

const Photo = ({
  hovered,
  style,
  withHover,
  widthResized,
  src,
}) => {
  const { width, ...styleRest } = style;

  let photoContrastHover,
    photoSizeHover = useRef();

  useEffect(() => {
    if (withHover && !(window.innerWidth < 768)) {
      if (hovered) {
        contrast.animationIn(photoContrastHover);
        size.animationIn(photoSizeHover, "wrapper", widthResized);
      } else {
        contrast.animationOut(photoContrastHover);
        size.animationOut(photoSizeHover, "wrapper", width);
      }
    }
  }, [hovered, width, photoContrastHover, widthResized, withHover]);

  return (
    <div
      style={{
        ...styleRest,
        zIndex: withHover && hovered ? 1 : "initial",
        backgroundImage: `url(${src})`,
      }}
      className="container-photo"
      ref={
        withHover &&
        ((el) => {
          photoContrastHover = el;
          photoSizeHover = el;
        })
      }
    />
  );
};

export default Photo;