import React from 'react';
import Header from './Header'
import ParticlesDNA from './ParticlesDNA'
import '../assets/styles/components/Layout.scss'

const Layout = ({ children }) => (
    <>
        <ParticlesDNA />
        <div className="layout">
            <Header />

            {children}

        </div>
    </>
);  

export default Layout;