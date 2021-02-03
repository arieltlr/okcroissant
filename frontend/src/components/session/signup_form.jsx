import React from 'react';
import { withRouter } from 'react-router-dom';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            password2: '',
        };
        // debugger
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
        // debugger
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
                        {this.props.otherForm}
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(SignupForm);