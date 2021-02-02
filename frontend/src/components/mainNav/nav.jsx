import React from 'react';

import NavSplashContainer from '../splash/nav_container';
import MainNavBar from './main';
// onclickk
class NavBar extends React.Component {
    constructor(props) {
        super(props)
    }
// mainnavbar if user is signed in
// navsplash if user is not signed in
    render() {
        {console.log(this.props.isAuthenticated)}
        return (
            <div>
                {true ? < MainNavBar /> : <NavSplashContainer/>}
            </div>
            )
    }
}

export default NavBar;