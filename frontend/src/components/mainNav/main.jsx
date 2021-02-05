import React from 'react';
import Logo from '../../images/croissant_icon.png';
import {Link} from 'react-router-dom';

// THIS IS MAIN NAV BAR!!! (sorry for the file name, the main splash page is under main folder)
class MainNavBar extends React.Component {
    constructor(props) {
        super(props)
        //  
        this.handleLogout = this.handleLogout.bind(this);
    }

    componentDidMount(){
        this.props.fetchUser(this.props.currentUser);
        //  
    }

    handleLogout(e){
        e.preventDefault();
        //  
        this.props.logout();
    }

    render() {
        return (
            <nav className="master-nav">
                <div className="splash-nav1">
                    <Link to="/main" style={{ textDecoration: 'none' }} className="main-nav-logo">
                        <img className="logo1"src={Logo} alt="okCrossiantLogo" />
                        <p className="logo-text1">OkCroissant</p>
                    </Link>
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