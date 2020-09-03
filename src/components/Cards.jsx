import React from 'react';
import '../assets/styles/components/Cards.scss'

const Card = () => (
    <div className="container">
        <div className="card">
            <div className="imgBx">
                <div className="name" >
                    <h1>Arumi Mendoza Castellanos</h1>
                </div>
            </div>
            <div className="content">
                <h2>Lic. Antropologia fisica</h2>
                <p>Becaria en el laboratorio de fisiologia
                    y genetica con promedio de 9
                </p>
            </div>
        </div>
    </div>
);

export default Card;