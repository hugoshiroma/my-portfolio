import gsap from "gsap";

const animationIn = (elem, type = "wrapper", widthRedized = "25rem") => {
  gsap
    .timeline({
      defaults: { ease: "power3.out", duration: 0.5 },
    })
    .to(elem, {
      minInlineSize: type === "wrapper" ? widthRedized : "initial",
      height: widthRedized,
      marginTop:
        type === "wrapper"
          ? `-${widthRedized.replace(/[a-zA-Z]/g, "") / 5}${widthRedized.replace(
              /[0-9]/g,
              ""
            )}`
          : "initial",
    });
};

const animationOut = (elem, type = "wrapper", width = "15rem") => {
  gsap
    .timeline({
      defaults: { ease: "power3.out", duration: 0.5 },
    })
    .to(elem, {
      minInlineSize: type === "wrapper" ? width : "initial",
      height: width,
      marginTop: "0",
    });
};

export const size = {
  animationIn,
  animationOut,
};
