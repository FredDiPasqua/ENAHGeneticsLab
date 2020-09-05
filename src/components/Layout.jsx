import React from 'react';
import Header from './Header'
import Footer from './Footer'
import ParticlesDNA from './ParticlesDNA'
import '../assets/styles/components/Layout.scss'

const Layout = ({ children }) => (
    <>
        <ParticlesDNA />
        <div className="layout">
            <Header />

            {children}
            <Footer />

        </div>
    </>
);  

export default Layout;