import React from 'react';
import { withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
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
        this.props.login(user);
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
                    <h2 className="form-brand">OkCroissant</h2>
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
                        {this.props.otherForm}
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(LoginForm);