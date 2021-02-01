// src/components/main/main_page.js

import React from 'react';
import NavSplash from './nav_splash'
import './splash.css'


class SplashPage extends React.Component {

    render() {
        return (
            <div>
                <NavSplash/>
                <h1>splashpage</h1>
            </div>
        );
    }
}

export default SplashPage;