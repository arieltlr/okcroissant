import React from 'react';
import { withRouter } from 'react-router-dom';
import Logo from '../../images/croissant_icon.png';
import DemoLogIn from './demo_login_container'

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearedErrors = false;
        this.guestLoginUpdate = this.guestLoginUpdate.bind(this);
    };

    update(field) {
        return e => this.setState({
            [field]: e.target.value
        });
    }
    handleSubmit(e){
        e.preventDefault();
        let user = {
            username: this.state.username,
            password: this.state.password,
        }
        //  
        this.props.login(user);
    }

    guestLoginUpdate(key, vaule){
        this.setState({
            [key]: vaule
        })
    }

     componentWillUnmount(){
        const resetErrors = {};
        this.props.refreshErrors(resetErrors);
    }

    render() {
        return (
            <div className="login-form-container">
                <div className="logo-container">
                    <div className="logo">
                    </div>
                    <div className="splash-nav1">
                        <img className="logo1"src={Logo} alt="okCrossiantLogo" />
                        <p className="logo-text">OkCroissant</p>
                    </div>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div className="login-form">
                        <div className="input-container">
                        <p className="input-label">Username</p>
                        <input  className="form-input" type="text"
                            defaultValue={this.state.username}
                            onChange={this.update('username')}
                            placeholder="Username"
                        />
                        <p className="error">{this.props.errors.username}</p>
                        </div>
                        <div className="input-container">
                            <p className="input-label">Password</p>
                            <input className="form-input" type="password"
                            defaultValue={this.state.password}
                            onChange={this.update('password')}
                            placeholder="Password"
                            />
                        <p className="error">{this.props.errors.password}</p>
                        </div>
                        <button className="form-submit">Log in</button>
                        <div className="other-form-container">
                            {this.props.otherForm}
                        </div>
                        <DemoLogIn  guestLoginUpdate={this.guestLoginUpdate}/>
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(LoginForm);