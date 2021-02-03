import React from 'react';


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
                <div className="splash-nav">
                    <img className="logo" src="https://media.istockphoto.com/photos/heap-of-bread-picture-id995038782?s=170667a" alt="okCrossiantLogo" />
                    <button>Profile</button>
                    <button>Cart</button>
                    <button onClick={this.handleLogout}>Log Out</button>
                </div>
            </nav>

        )
    }
}

export default MainNavBar;