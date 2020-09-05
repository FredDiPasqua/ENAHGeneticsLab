import React from 'react';
import '../assets/styles/components/About.scss'

const About = () => (
    <div className="about">
        <p>...</p>
        <p className="parrafo">
            Como parte de la Licenciatura en Antropología Física de la Escuela Nacional de
            Antropología e Historia (ENAH), Los Laboratorios de Fisiología, Bioquímica y Genética y
            Genética Molecular desempeñan actividades de docencia, investigación y apoyo a los
            académicos del INAH. En específico:
        </p>
        <div className="lab1">
            <h3>Laboratorio de fisiología, bioquímica y genética</h3>
            <p>  El laboratorio de fisiología, bioquímica y genética de la licenciatura
                en Antropología Física de la ENAH, está encaminado a reforzar
                experimentalmente el conocimiento de la naturaleza, composición
                y funcionamiento del cuerpo humano. Los alumnos aprenden a
                utilizar métodos y técnicas para interpretar, contrastar y opinar
                respecto a lo adquirido en la teoría; a utilizar materiales y
                sustancias químicas así como equipos de laboratorio y, a trabajar
                en equipo. Participan como prestadores de servicio social,
                tesistas, becarios o colaboradores en proyectos.
            </p>
            <iframe className="videos" width="420" height="205" src="https://www.youtube.com/embed/alKTAvOdMSQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"></iframe>
        </div>
        {/* <div class="vertical-line"></div> */}
        <div className="lab2">
            <h3>Laboratorio de genética molecular</h3>
            <p> El Laboratorio de Genética Molecular de la ENAH está dedicado la docencia e investigación en el área de 
                la genética antropológica, la cual aplica los métodos y teorías de la genética a temas de interés antropológico. 
                Estas preguntas conciernen a los procesos evolutivos humanos, la diáspora fuera de África, los resultados de los 
                modelos de la variabilidad humana y el estudio de los factores hereditarios relacionados con las enfermedades 
                complejas en ambientes bioculturales.
                Nuestros trabajos de investigación han estado enfocados a estudiar en las poblaciones mexicanas:
                La variabilidad de genes de la respuesta inmune, principalmente genes del sistema HLA los cuales son de interés 
                médico por su importancia en la investigación relacionada con trasplantes, enfermedades infecciosas y autoinmunes 
                (colaboración con el Dr. Julio Granados del INCMNSZ).
                Las frecuencias de STRs de uso forense para identificación humana.
                Marcadores asociados a la características metabólicas como el colesterol y otros parámetros bioquímicos (colaboración 
                con el Dr. Samuel Canizales del INCMNSZ)
                La relación entre variaciones genéticas y variaciones morfológicas craneofaciales (colaboración con el Mtro. Jorge Gómez 
                Valdés de la Facultad de Medicina de la UNAM).
                Estudios sobre la historia y la composición genética de poblaciones mexicanas, particularmente en el norte de Guerrero
                Además desde el 2011 se ha realizado un esfuerzo por desarrollar protocolos de ADN antiguo en colaboración con el antropólogo 
                Ernesto González Velasco del Centro INAH Tamaulipas y el Dr. Rafael Montiel de LANGEBIO, Cinvestav, IPN.
            </p>
            <iframe className="videos" width="420" height="205" src="https://www.youtube.com/embed/petxrMij6Dw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"></iframe>

        </div>


    </div>
);

export default About;