import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export const scroll = (elem) => {
  if (window.innerWidth < 768) {
    gsap
    .timeline({
      defaults: { ease: "power3.inOut", duration: 1.5 },
    })
    .to(".App", { scrollTo: `#${elem.id}` });
  }
};
