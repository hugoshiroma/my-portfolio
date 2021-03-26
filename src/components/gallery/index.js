import React, { useCallback, useEffect, useState } from "react";

import { Photo } from "components";

import "./style.scss";

const Gallery = ({
  photosSrc: inputPhotos = [],
  photoWidth = "15rem",
  photoWidthResized = "25rem",
}) => {
  const [photos, setPhotos] = useState(inputPhotos);
  const [hover, setIndexHovered] = useState(null);

  const handlePhotos = useCallback(() => {
    if (Boolean(inputPhotos.length)) {
      let newPhotos = inputPhotos.map((photo, index) => ({
        photoSrc: photo.src,
        left: Boolean(inputPhotos.length)
          ? `calc(-${index * photoWidth.replace(/[a-zA-Z]/g, "")}rem + calc(${
              (index / (inputPhotos.length - 1)) * 100
            }% - ${
              (index / (inputPhotos.length - 1)) *
              photoWidth.replace(/[a-zA-Z]/g, "")
            }rem))`
          : 0,
        style: photo.imgStyle,
      }));
      setPhotos(newPhotos);
    }
  }, [inputPhotos, photoWidth]);

  useEffect(() => {
    handlePhotos();
  }, [handlePhotos]);

  return (
    <div className="photos">
      {photos.map(({ left, photoSrc, style }, index) => (
        <>
          {!(window.innerWidth < 768) && (
            <div
              className="hover-wrapper"
              style={{
                top: hover === index ? "-5rem" : "initial",
                width:
                  index !== photos.length - 1
                    ? `calc((100% - ${photoWidth}) / (${photos.length} - 1))`
                    : hover === index
                    ? photoWidthResized
                    : photoWidth,
                height: hover === index ? photoWidthResized : photoWidth,
                left:
                  index !== photos.length - 1
                    ? `calc(100% - ${photoWidth} - calc((100% - ${photoWidth}) / (${
                        photos.length
                      } - 1)) - calc(${
                        photos.length - 2 - index
                      } * calc((100% - ${photoWidth}) / (${
                        photos.length
                      } - 1))))`
                    : `calc(100% - ${photoWidth})`,
              }}
              onMouseEnter={() => setIndexHovered(index)}
              onMouseLeave={() => setIndexHovered(null)}
            />
          )}
          <Photo
            style={{
              left,
              width: photoWidth,
              ...style,
            }}
            widthResized={photoWidthResized}
            withHover={true}
            hovered={hover === index}
            src={photoSrc}
          />
        </>
      ))}
    </div>
  );
};

export default Gallery;
