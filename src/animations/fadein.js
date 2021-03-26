import gsap from "gsap";

export const fadein = (elem) => {
  elem &&
    elem.isConnected &&
    gsap
      .timeline({
        defaults: { ease: "power3.inOut", duration: 0.8 },
      })
      .from(elem, {
        opacity: 0,
      });
};

export const fadeout = (elem) => {
  elem &&
    elem.isConnected &&
    gsap
      .timeline({
        defaults: { ease: "power3.inOut", duration: 0.6 },
      })
      .from(elem, {
        opacity: 1,
      });
};
