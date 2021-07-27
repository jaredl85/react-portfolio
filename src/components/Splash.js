import React from 'react';
import { init } from 'ityped';
import { useEffect, useRef } from 'react';
import './components.scss';

export default function Splash() {

    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, { 
            showCursor: true,
            typeSpeed: 150,
            backDelay: 1500,
            backSpeed: 150, 
            strings: ['React', 'JavaScript', 'HTML', 'CSS', 'BootStrap', 'SASS'] 
        });
    }, []);

    return (
        <div className="splash" id="home">
            <div className="splash-text-box">
                <h1>
                    Hello. I'm <span>Jared.</span>
                    <br />
                    I build websites with <br/> <span ref={textRef}></span>
                </h1>
                <br/>
                <a className="home-btn" href="#work">See my work</a>
            </div>
        </div>
    )
}
