import gsap from "gsap";

const animationIn = (elem) => {
  gsap
    .timeline({
      defaults: { ease: "power3.in", duration: 0.5 },
    })
    .to(
      elem,
      {
        filter: "contrast(1)",
      },
      "-=0.4"
    );
};

const animationOut = (elem) => {
  gsap
    .timeline({
      defaults: { ease: "power3.in", duration: 0.5 },
    })
    .to(
      elem,
      {
        filter: "contrast(0.4)",
      },
      "-=0.4"
    );
};

export const contrast = {
  animationIn,
  animationOut,
};
