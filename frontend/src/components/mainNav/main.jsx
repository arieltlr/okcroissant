import React from 'react';


// onclickk
class MainNavBar extends React.Component {
    constructor(props) {
        super(props)
        // this.logoutUser = this.logoutUser(this)
    }

    // logoutUser(e){
    //     e.preventDefault();
    //     this.props.logout()
    // }

    render() {
        return (
            <nav className="master-nav">
                <div className="splash-nav">
                    <img className="logo" src="https://media.istockphoto.com/photos/heap-of-bread-picture-id995038782?s=170667a" alt="okCrossiantLogo" />
                    {/* <button onClick={()=>this.logoutUser}>Logout</button> */}
                </div>
            </nav>

        )
    }
}

export default MainNavBar;