import React from 'react';
import '../assets/styles/components/Members.scss'

import Card from './Cards';

const Members = () => (
    <div className="members" >
        <h1>Members</h1>
        <div className="jerarquias">
            <Card
                class="card_chiefs" 
                nombre="A.F. Víctor Acuña Alonzo "
                puesto="Responsable Académico"
                labor="Profesor Investigador, INAH" 
            />
            <Card
                class="card_chiefs" 
                nombre="A.F. Miguel Ángel Contreras Sieck"
                puesto="Responsable Técnico"
                labor="Profesor H-S-M" 
            />
        </div>
        <div className="jerarquias">
            <Card
                class="card_colaboradores"
                nombre="A.F. Paola Everardo Martínez"
                puesto="..."
                labor="..."
            />
            <Card
                class="card_colaboradores"
                nombre="A.F. Gastón Macín Pérez"
                puesto="..."
                labor="..."
            />
            <Card
                class="card_colaboradores"
                nombre="A.F. Mónica Ballesteros Romero"
                puesto="..."
                labor="..."
            />
        </div>
        <div className="jerarquias">
            <Card
                class="card_becarios" 
                nombre="Daniela Sandoval Morales"
                puesto="Estudiante en Antropología Física"
                labor="Becaria "
            />
            <Card
                class="card_becarios" 
                nombre="Claudia Quiroz Lopez"
                puesto="Estudiante en Antropología Física"
                labor="Becaria "
            />
            <Card
                class="card_becarios" 
                nombre="Alejandro Alvarado González"
                puesto="Estudiante en Antropología Física"
                labor="Becaria "
            />
            <Card
                class="card_becarios" 
                nombre="Arumi Mendoza Castellanos"
                puesto="Estudiante en Antropología Física"
                labor="Becaria "
            />
        </div>
    </div>
);

export default Members;