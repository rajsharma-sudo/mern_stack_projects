import React from 'react';
import './Hero.css';
import Hand_icon from '../Assets/hand_icon.png';
import Arrow_icon from '../Assets/arrow.png';
import Hero_img from '../Assets/hero_image.png';

const Hero = () => {
    return (
        <div className='hero'>

            {/* HERO LEFT CONTENT    */}

            <div className="hero-left">
                <h2>NEW ARRIVALS ONLY</h2>
                <div>
                    <div className="hero-hand-icon">
                        <p>new</p>
                        <img src={Hand_icon} alt="" />
                    </div>
                    <p>collections</p>
                    <p>for everyone</p>
                </div>
                <div className="hero-latest-btn">
                    <div>Latest Collection</div>
                    <img src={Arrow_icon} alt="" />
                </div>
            </div>

            {/* HERO RIGHT CONTENT */}

            <div className="hero-right">
                <img src={Hero_img} alt="" />
            </div>
        </div>
    )
}

export default Hero
