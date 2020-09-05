import React from 'react';
import { NavLink } from 'react-router-dom';
import '../assets/styles/components/Header.scss'
import logo from '../assets/logo.jpg'
import logoEnah from '../assets/enah-logo3.png'

const Header = () => {
    return (
        <>
            <div className="header" >
                <img className="logo" src={logo} alt=""/>
                <div className="title">
                    <h1>Laboratorio de Genética Molecular</h1>
                    <p>Licenciatura en Antropología Física   |   Escuela Nacional de Antropología e Historia</p>

                </div>
                <img className="enah-logo" src={logoEnah} alt=""/>

            </div>
            <div className="menu" >
                <NavLink className="links" to="/">Inicio</NavLink>
                <hr/>
                <NavLink className="links" to="/about">Acerca de</NavLink>
                <hr/>
                <NavLink className="links" to="/research">Líneas de Investigación</NavLink>
                <hr/>
                <NavLink className="links" to="/members">Miembros</NavLink>
                <hr/>
                <NavLink className="links" to="/proyect">Proyecto Ética de Investigación</NavLink>
            </div>
        </>

    )
};


export default Header;