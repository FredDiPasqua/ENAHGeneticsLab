import React from 'react';
import '../assets/styles/components/Cards.scss'

const Card = (props) => (
    <div className="container">
        <div className={props.class}>
            <div className="imgBx">
                <div className="name" >
                    <h1>{props.nombre}</h1>
                </div>
            </div>
            <div className="content">
                <h3>{props.puesto}</h3>
                <p>{props.labor}</p>
            </div>
        </div>
    </div>
);

export default Card;