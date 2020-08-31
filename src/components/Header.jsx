import React from 'react';
import { NavLink } from 'react-router-dom';
import '../assets/styles/components/Header.scss'

const Header = () => {
    return (
        <div className="header" >
            <NavLink className="links" to="/">Inicio</NavLink>
            <NavLink className="links" to="/about">Acerca de</NavLink>
            <NavLink className="links" to="/lineas_de_investigacion">Lineas de Investigación</NavLink>
            <NavLink className="links" to="/miembros">Miembros</NavLink>
            <NavLink className="links" to="/proyecto">Proyecto Etica de Investigación</NavLink>

        </div>

    )
};


export default Header;