import React from 'react';
import Nav from './Nav.js';
import About from './About';
import SocialIcons from './SocialIcons.js';
import Work from './Work';
import Contact from './Contact';
import Splash from './Splash';
import Footer from './Footer';
import './components.scss';

export default function Home() {
    return (
        <div>
            <Nav />
            <Splash />
            <About />
            <SocialIcons />
            <Work />
            <Contact />
            <Footer />
        </div>
    )
}
