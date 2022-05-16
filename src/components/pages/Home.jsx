import React, { useState } from 'react';
import '../../css/pages/Home.css';
import { homeData } from '../../mock/data';
import { homepageImage } from '../../mock/data';

function Home({ setPage }) {

    const [heroDataState] = useState(homeData);

    return (
        <div className='home-box' >
            <div className='hero-text-box'  >
                <h1 className='hero-title' id='main-content' >Hi, I'm {heroDataState.name}</h1>
                <span className='hero-description' >{heroDataState.description}</span>
                <button
                    className="hero-cta-btn"
                    onClick={(e) => {
                        e.preventDefault();
                        setPage('CONTACT');
                    }}>
                    {heroDataState.cta}
                </button>
            </div>
            <img
                className='hero-pic'
                src={homepageImage}
                alt="homepage" />
        </div>
    );
}

export default Home;
