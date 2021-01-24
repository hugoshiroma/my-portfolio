import gsap from 'gsap';

export const titleAnimation = elem => {
    elem && elem.current &&
    gsap.timeline({
        defaults: {ease: 'power2.inOut', duration: 1.5}
    })
    .from(elem, {
        y: -30,
        clipPath: 'inset(100% 0 0 0)',
        stagger: .2,
        duration: .7,
        delay: 1
    })
}