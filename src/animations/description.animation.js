import gsap from 'gsap';

export const descriptionAnimation = elem => {
    elem && elem.current &&
    gsap.timeline({
        defaults: {ease: 'power2.inOut', duration: 1.5}
    })
    .from(elem, {
        y: 20,
        clipPath: 'inset(0 0 100% 0)',
        stagger: .2,
        duration: .7,
        delay: 1
    })
}