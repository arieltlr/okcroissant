import React from 'react';

import NavSplashContainer from '../splash/nav_container';
import MainNavContainerBar from './main_container';
// onclickk
class NavBar extends React.Component {
    constructor(props) {
        super(props)
    }
// mainnavbar if user is signed in
// navsplash if user is not signed in
    render() {
        // {console.log(this.props.isAuthenticated)}
        return (
            <div>
                {this.props.isAuthenticated ? < MainNavContainerBar /> : <NavSplashContainer/>}
            </div>
            )
    }
}

export default NavBar;