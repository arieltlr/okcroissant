import React from 'react'

class DemoLogIn extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            username: "kaizhu",
            password: "123456"
        }
        this.handleClick = this.handleClick.bind(this);   
    }
    handleClick(e){
        this.props.guestLoginUpdate('username', this.state.username);
        this.props.guestLoginUpdate('password', this.state.password);
    }
    render(){
        return (
            <div className='demo-block'>
                <button  className='demo-button' onClick={this.handleClick}>Guest Login</button>
            </div>

            
        )
    }
}

export default DemoLogIn;