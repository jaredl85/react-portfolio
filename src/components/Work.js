import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import NEC from './nec_splash.png';
import PORT from './portfolio_splash.png';
import TWD from './twd_splash.png';
import NUCAMP from './nucamp_splash.png';
import './components.scss';

class Work extends Component {
    render() {
        return (
            <div className="work" id="work">
                <h2>Work</h2>

                <div className="project-wrapper">
                    <div className="project-row">
                        <div className="project-col">
                            <Link to='/nechiro'>
                                <div className="project-box">
                                    <img src={NEC} />
                                </div>
                            </Link>
                        </div>

                        <div className="project-col">
                            <Link to='/portfolio'>
                                <div className="project-box">
                                    <img src={PORT} />
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="project-row">
                        <div className="project-col">
                            <Link to='/nucamp'>
                                <div className="project-box">
                                    <img src={NUCAMP} />
                                </div>
                            </Link>
                        </div>

                        <div className="project-col">
                            <Link to='/dogwithin'>
                                <div className="project-box">
                                    <img src={TWD} />
                                </div>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Work;