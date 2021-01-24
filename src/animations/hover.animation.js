import gsap from 'gsap';

export const hoverAnimation = elem => {
    gsap.timeline({
        defaults: {ease: 'power2.inOut', duration: 1.5}
    })
    .to(elem, {
        x: '10%',
        opacity: 0
    })
}