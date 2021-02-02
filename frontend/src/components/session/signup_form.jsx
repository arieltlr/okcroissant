import React from 'react';
import { withRouter } from 'react-router-dom';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            password2: '',
            errors: {}
        };
        // debugger
        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearedErrors = false;
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
        debugger
        this.props.signup(user)
            .then(this.props.closeModal)
    }
    


    render() {
        let usernameError;
        let passwordError;
        let usernameErrorBoolean;
        let passwordErrorBoolean;

        const errorMessages = Object.keys(this.props.errors).map((error, index)=> {
            if (error.includes("Username")){
                usernameErrorBoolean = true;
                usernameError = this.props.errors[error];
            } else {
                passwordErrorBoolean = true;
                passwordError = this.props.errors[error];
            }
        })
        debugger
        return (
            <div className="signup-form-container">
                <div className="logo-container">
                    <div className="logo">
                    </div>
                    <h2 className="form-brand">OkCroissant</h2>
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
                        {usernameErrorBoolean ? <p className="error">{usernameError}</p> : null}
                        </div>
                        <div className="input-container">
                            <p className="input-label">Password</p>
                            <input className="form-input" type="password"
                            defaultValue={this.state.password}
                            onChange={this.update('password')}
                            placeholder="Password"
                            />
                        {passwordErrorBoolean ? <p className="error">{passwordError}</p> : null}
                        </div>
                        <div className="input-container">
                            <p className="input-label">Confirm Password</p>
                            <input className="form-input" type="password"
                            defaultValue={this.state.password2}
                            onChange={this.update('password2')}
                            placeholder="Confirm Password"
                            />
                        {passwordErrorBoolean ? <p className="error">{passwordError}</p> : null}
                        </div>
                        <button className="form-submit">Create Account</button>
                        <br/>
                        {this.props.otherForm}
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(SignupForm);