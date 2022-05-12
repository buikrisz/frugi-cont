import React from 'react';
import { LandingForm } from '..';
import './PestLandingSection.css';

function LandingSection() {
    return (
        <section id='landingSection'>
            <nav>
                <img src="" alt="Logo" />
                <ul>
                    <a href="#chooseUs"><li>Rólunk</li></a>
                    <a href="#services"><li>Szolgáltatások</li></a>
                    <a href="#contactSection"><li>Kapcsolat</li></a>
                </ul>
            </nav>
            <div className='landingContent'>
                <div>
                    <h2>Lakások védelme a váratlan betolakodóktól</h2>
                    <img src="./images/pest_control.png" alt="Pest Control" />
                </div>
                <LandingForm />
            </div>
        </section>
    )
}   

export default LandingSection;