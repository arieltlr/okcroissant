import React from 'react';


// onclickk
class NavSplash extends React.Component{
    constructor(props){
        super(props)
        // debugger
    }

    render(){
        // debugger
        return (
            // <div className="master">
            <nav className="splash-nav">
                <img className="logo" src="" alt="okCrossiantLogo" />
                <div className="button-master">
                    <div>
                        <button className="button-splash" onClick={() => this.props.openModal('login')}>Login</button>
                    </div>
                    <div>
                        <button className="button-splash" onClick={() => this.props.openModal('signup')}>Sign Up</button>
                    </div>
                </div>
            </nav>
            // </div>
        )
    }
}

export default NavSplash;