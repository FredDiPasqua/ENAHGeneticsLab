import React from 'react';
import '../assets/styles/components/Members.scss'

import Card from './Cards';

const Members = () => (
    <div className="members" >
        <h1>Miembros</h1>
        <div className="jerarquias">
            <h3>Responsables</h3>
            <p>A.F. Víctor Acuña Alonzo </p>
            <p> A.F. Miguel Ángel Contreras Sieck</p>
            <h3>Colaboradores</h3>
            <p>A.F. Paola Everardo Martínez</p>
            <p>A.F. Mónica Ballestero Romero</p>
            <p>A.F. Gastón Macín Pérez</p>
            <h3>Becarios</h3>
            <p>Daniela Sandoval Morales</p>
            <p>Claudia Quiroz López</p>
            <p>Alejandro Alvarado González</p>
            <p>Arumi Mendoza Castellanos</p>
           
        </div>
    </div>
);

export default Members;