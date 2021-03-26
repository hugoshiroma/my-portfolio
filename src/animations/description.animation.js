import gsap from "gsap";

export const descriptionAnimation = (elem, noDelay = false) => {
  elem &&
    elem.isConnected &&
    gsap
      .timeline({
        defaults: { ease: "power2.inOut", duration: 1.5 },
      })
      .from(elem, {
        y: 20,
        clipPath: "inset(0 0 100% 0)",
        stagger: 0.2,
        duration: 0.7,
        delay: noDelay ? 0 : 1,
      });
};
