import React from 'react'

class DemoLogIn extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            username: "kaizhu",
            password: "123456"
        }
    }
    render(){
        return (
            <div className='demo-block'>
                <button  className='demo-button' onClick={()=>this.props.login(this.state)}>Guest Login</button>
            </div>

            
        )
    }
}

export default DemoLogIn;