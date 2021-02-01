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
                    <p>
                        This is going to be the content
                    </p>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default SplashPage;