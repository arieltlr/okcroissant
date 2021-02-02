import React from 'react';
import { withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            errors: {}
        };
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
        }
        // debugger
        this.props.login(user).then(this.props.closeModal())
    }
    
    showErrors() {
        return (
            <ul>
                {Object.keys(this.state.errors).map((error, index) => {
                    return(
                        <li key={`error-${index}`}>
                            {this.state.errors[error]}
                        </li>
                    )
                })};
            </ul>
        );
    }

    render() {
        let emailError;
        let passwordError;
        let emailErrorBoolean;
        let passwordErrorBoolean;

        const errorMessages = Object.keys(this.state.errors).map((error, index)=> {
            if (error.includes("Email")){
                emailErrorBoolean = true;
                emailError = this.state.errors[error];
            } else {
                passwordErrorBoolean = true;
                passwordError = this.state.errors[error];
            }
        })

        return (
            <div className="signup-form-container">
                <form onSubmit={this.handleSubmit}>
                    <div className="signup-form">
                        <div className="input-container">
                        <p className="input-label">Username</p>
                        <input  className="form-input" type="text"
                            value={this.state.username}
                            onChange={this.update('username')}
                            placeholder="Username"
                        />
                        {emailErrorBoolean ? <p className="error">{emailError}</p> : null}
                        </div>
                        <div className="input-container">
                            <p className="input-label">Password</p>
                            <input className="form-input" type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            placeholder="Password"
                            />
                        {passwordErrorBoolean ? <p className="error">{passwordError}</p> : null}
                        </div>
                        <button className="form-submit">Log in</button>
                        {this.props.otherForm}
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(LoginForm);