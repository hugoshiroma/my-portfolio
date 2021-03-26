import { useEffect, useState } from "react";

const IsMobile = () => {
  const [widthValue, setWidthValue] = useState(window.innerWidth);

  const getWindowDimensions = () => {
    const { innerWidth: width } = window;
    return width;
  };

  useEffect(() => {
    window.addEventListener("resize", () =>
      setWidthValue(getWindowDimensions())
    );
    return () =>
      window.removeEventListener("resize", () =>
        setWidthValue(getWindowDimensions())
      );
  }, []);

  return widthValue <= 480;
};

export default {
  isMobile: IsMobile,
};
