import gsap from 'gsap';

export const backgroundImageAnimation = elem => {
    gsap.timeline({
        defaults: {ease: 'power2.inOut', duration: 1.5}
    })
    .from(elem, {
        x: '-10%',
        opacity: 0
    })
}