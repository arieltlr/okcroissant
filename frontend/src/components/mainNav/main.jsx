import React from 'react';
import Logo from '../../images/croissant_icon.png';
import {Link} from 'react-router-dom';

// THIS IS MAIN NAV BAR!!! (sorry for the file name, the main splash page is under main folder)
class MainNavBar extends React.Component {
    constructor(props) {
        super(props)
        // debugger
        this.handleLogout = this.handleLogout.bind(this);
    }

    componentDidMount(){
        this.props.fetchUser(this.props.currentUser);
        // debugger
    }

    handleLogout(e){
        e.preventDefault();
        // debugger
        this.props.logout();
    }

    render() {
        return (
            <nav className="master-nav">
                <div className="splash-nav1">
                    <img className="logo1"src={Logo} alt="okCrossiantLogo" />
                    <p className="logo-text">OkCroissant</p>
                </div>
                <div className="master-nav-buttons">
                    <Link to="/profile"><button className="button-splash">Profile</button></Link>
                    <Link to="/cart"><button className="button-splash">Cart</button></Link>
                    <button className="button-splash" onClick={this.handleLogout}>Log Out</button>
                </div>
            </nav>

        )
    }
}

export default MainNavBar;