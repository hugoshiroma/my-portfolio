import React, { useRef, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import { headerAnimation } from '../../animations/header.animation';
import './style.scss';

const links = [
    {to: '/about', content: 'Sobre'},
    {to: '/projects', content: 'Projetos'},
    {to: '/experience', content: 'Experiência'},
    {to: '/contact', content: 'Contato'},
]

export const HeaderComponent = () => {
    let introHeader = useRef(null);

    useEffect(() => {
            headerAnimation(introHeader);
        }
    )

    return (
        <>
            <header className="container" ref={el => introHeader = el}>
                {links.map(({to, content}) => (
                    <NavLink to={to} data-content={content} exact>{content}</NavLink>
                ))}
            </header>
        </>
    );
}