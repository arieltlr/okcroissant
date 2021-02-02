// src/components/main/main_page.js

import React from 'react';
import NavSplash from './nav_splash';
import Footer from './footer';


class SplashPage extends React.Component {

    render() {
        return (
            <div>
                <NavSplash/>
                <div>
                    <p className=".content-splash">
                        OkCroissant is a premium worlwide bread concierge that delivers bread from all over the world through a premium overnight international jet to your door. Users can sign up for an account and fill out a get-to-know-you form to find out what bread is better suited for them. Once the bread choices are presented, Users can click on the bread and see existing reviews on the bread and add them to cart.
                    </p>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default SplashPage;