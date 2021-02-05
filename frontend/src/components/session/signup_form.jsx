import React from 'react';
import { withRouter } from 'react-router-dom';
import Logo from '../../images/croissant_icon.png';
import { Link } from 'react-router-dom';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            password2: '',
        };
        //  
        this.handleSubmit = this.handleSubmit.bind(this);
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
            password2: this.state.password2,
        }
        //  
        this.props.signup(user)
    }
    componentWillUnmount(){
        const resetErrors = {};
        this.props.refreshErrors(resetErrors);
    }



    render() {   
        return (
            <div className="signup-form-container">
                <div className="logo-container">
                    <div className="logo">
                    </div>
                    <div className="splash-nav1">
                        <img className="logo1"src={Logo} alt="okCrossiantLogo" />
                        <p className="logo-text">OkCroissant</p>
                    </div>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div className="signup-form">
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
                        <div className="input-container">
                            <p className="input-label">Confirm Password</p>
                            <input className="form-input" type="password"
                            defaultValue={this.state.password2}
                            onChange={this.update('password2')}
                            placeholder="Confirm Password"
                            />
                        <p className="error">{this.props.errors.password}</p>
                        </div>
                            <button className="form-submit">Create Account</button>
                        <div className="other-form-button-sign-up">
                            {this.props.otherForm}
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(SignupForm);