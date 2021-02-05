// src/components/main/main_page.js

import React from 'react';
import Footer from './footer';
import image1 from '../../images/natsuki-buns2-unsplash.jpg';
import image2 from '../../images/maria-petersson-aajFDq9XugA-unsplash.jpg';
import image3 from '../../images/victoria-shes--IXuIVhA-rE-unsplash.jpg';

class SplashPage extends React.Component {
    constructor(props){
        super(props)
        //  
    }
    render() {
        return (
            <div className="main-div">
                <div className="hero-image-container">
                    <div className="hero-image">
                        <div className="hero-text-container">
                            <p className="hero-text" id="hero-text-1">Gourmet Bread</p>
                            <p className="hero-text"id="hero-text-2">Warm on your Doorstep</p>
                        </div>
                    </div>
                </div>
                <div className="about-container">
                    <div className="about-point">
                        <div className="how-it-works-img1"></div>
                        <p className="how-it-works-text" id="1">
                            Select bread vendors around the world
                        </p> 
                    </div>
                    <div className="about-point">
                        <p className="how-it-works-text" id="2">
                            Browse our colletion of gourmet options
                        </p> 
                        <div className="how-it-works-img2"></div>
                    </div>
                    <div className="about-point">
                        <div className="how-it-works-img3"></div>
                        <p className="how-it-works-text" id="3">
                            Delivered on time for breakfast ...by jet
                        </p> 
                        
                    </div>

                </div>
                <div className="three-images">
                    <img src={image1}/>
                    <img src={image2}/>
                    <img src={image3}/>
                </div>
                <Footer />
            </div>
        );
    }
}

export default SplashPage;