import gsap from "gsap";

export const fadeout = (node, done, match) => {
  gsap
    .timeline({
      defaults: { ease: "power3.inOut", duration: 1 },
    })
    .to(
      node,
      {
        autoAlpha: match != null ? 1 : 0,
        opacity: 0,
        onComplete: done,
      },
      0
    );
};
