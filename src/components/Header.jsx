import React from 'react';
import { NavLink } from 'react-router-dom';
import '../assets/styles/components/Header.scss'
import logo from '../assets/logo.jpg'
import logoEnah from '../assets/enah-logo.png'

const Header = () => {
    return (
        <>
            <div className="header" >
                <img className="logo" src={logo} alt=""/>
                <h1 className="title" >Laboratorio de Genética Molecular</h1>
                <img className="enah-logo" src={logoEnah} alt=""/>

            </div>
            <div className="menu" >
                <NavLink className="links" to="/">Inicio</NavLink>
                <NavLink className="links" to="/about">Acerca de</NavLink>
                <NavLink className="links" to="/research">Líneas de Investigación</NavLink>
                <NavLink className="links" to="/miembros">Miembros</NavLink>
                <NavLink className="links" to="/proyecto">Proyecto Ética de Investigación</NavLink>

            </div>
        </>

    )
};


export default Header;