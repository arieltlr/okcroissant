import React from 'react';
import Logo from '../../images/croissant_icon.png';


// onclickk
class NavSplash extends React.Component{
    constructor(props){
        super(props)
        // debugger
    }

    render(){
        // debugger
        return (
            <nav className="master-nav1">
                <div className="splash-nav1">
                    <img className="logo1"src={Logo} alt="okCrossiantLogo" />
                    <p className="logo-text">OkCroissant</p>
                </div>
                <div className="button-master1">
                    <button className="button-splash1" onClick={() => this.props.openModal('login')}>Login</button>
                    <button className="button-splash1" onClick={() => this.props.openModal('signup')}>Sign Up</button>
                </div>
               
            </nav>

        )
    }
}

export default NavSplash;