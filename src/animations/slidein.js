import gsap from "gsap";

export const slidein = async (elem) => {
  elem &&
    elem.isConnected &&
    gsap
      .timeline({
        defaults: { ease: "power3.inOut", duration: 1 },
      })
      .from(elem, {
        opacity: 0,
        x: "-100%",
      });
};

export const slideout = async (elem) => {
  elem &&
    elem.isConnected &&
    gsap
      .timeline({
        defaults: { ease: "power3.inOut", duration: 1 },
      })
      .to(elem, {
        opacity: 0,
        x: "-100%",
      });
};
