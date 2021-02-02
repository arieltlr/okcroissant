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
            <nav className="master-nav">
                <div className="splash-nav">
                    <img className="logo"src="https://media.istockphoto.com/photos/heap-of-bread-picture-id995038782?s=170667a" alt="okCrossiantLogo" />
                </div>
                <div className="button-master">
                    <button className="button-splash" onClick={() => this.props.openModal('login')}>Login</button>
                    <button className="button-splash" onClick={() => this.props.openModal('signup')}>Sign Up</button>
                </div>
               
            </nav>

        )
    }
}

export default NavSplash;