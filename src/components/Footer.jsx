import React from 'react';
import '../assets/styles/components/Footer.scss'
import logoEnah from '../assets/enah-logo3.png'
import fb from '../assets/facebook.png'
import twitter from '../assets/twitter.png'
import web from '../assets/web.png'

const Footer = () => (
    <div className="footer">
        <img src={logoEnah} alt=""/>
        <div className="contacto">
            <p>📞 56-66-34-54  Ext. 411992</p>
            <p>Escuela Nacional de Antropología e Historia. 
                Licenciatura en Antropología Física. 
                Periférico sur y Zapote s/n. 
                Colonia Isidro Fabela. 14030 CDMX, México. 
            </p>

        </div>
        <div className="email">
            <h3>Escríbenos a: </h3>

            <p>📧 labgeneticamolecular@inah.gob.mx</p>
        </div>
        <div className="redes">
            <h3>Síguenos en: </h3>
            <a href="https://www.facebook.com/gm.enah/?epa=SEARCH_BOX">
                <img src={fb} alt="facebook"/>
            </a>
            <a href="https://twitter.com/gm_enah">
                <img src={twitter} alt="Twitter"/>
            </a>
            <a href="http://www.enah.edu.mx/index.php/moleculab">
                <img src={web} alt="Página Web"/>
            </a>

        </div>
    </div>
);

export default Footer;