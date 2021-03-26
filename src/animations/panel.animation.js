import gsap from "gsap";

export const panelAnimation = async (elem, invertedDir = null) => {
  elem &&
    elem.isConnected &&
    gsap
      .timeline({
        defaults: { ease: "power3.inOut", duration: 1.5 },
      })
      .from(elem, {
        opacity: 0,
        x: invertedDir ? "20%" : "-20%",
        stagger: { amount: 0.3 },
      });
};

export const panelAnimationOut = async (elem, invertedDir = null) => {
  gsap
    .timeline({
      defaults: { ease: "power2.inOut", duration: 1.5 },
    })
    .to(
      elem,
      {
        opacity: 0,
        delay: 0.5,
        duration: 1,
      },
      "-=1.5"
    )
    .to(elem, {
      x: invertedDir ? "20%" : "-20%",
      backdropFilter: "blur(0px)",
      stagger: { amount: 0.15 },
    });
};
