import React from 'react';


// onclickk
class MainNavBar extends React.Component {
    constructor(props) {
        super(props)
        debugger
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout(e){
        e.preventDefault();
        debugger
        this.props.logout();
    }

    render() {
        return (
            <nav className="master-nav">
                <div className="splash-nav">
                    <img className="logo" src="https://media.istockphoto.com/photos/heap-of-bread-picture-id995038782?s=170667a" alt="okCrossiantLogo" />
                    <button onClick={this.handleLogout}>Log Out</button>
                </div>
            </nav>

        )
    }
}

export default MainNavBar;