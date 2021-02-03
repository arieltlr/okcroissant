import React from 'react';
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
        debugger
    }

    handleLogout(e){
        e.preventDefault();
        // debugger
        this.props.logout();
    }

    render() {
        return (
            <nav className="master-nav">
                <Link to="/main"><img className="logo" src="https://media.istockphoto.com/photos/heap-of-bread-picture-id995038782?s=170667a" alt="okCrossiantLogo" /></Link>
                <div>
                    <Link to="/profile"><button className="button-splash">Profile</button></Link>
                    <Link to="/cart"><button className="button-splash">Cart</button></Link>
                    <button className="button-splash" onClick={this.handleLogout}>Log Out</button>
                </div>
            </nav>

        )
    }
}

export default MainNavBar;