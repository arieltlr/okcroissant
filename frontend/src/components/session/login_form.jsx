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
            username: this.state.email,
            password: this.state.password,
        }
        this.props.login(user, this.props.history)
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
        return (
            <div className="signup-form-container">
                <form onSubmit={this.handleSubmit}>
                    <div className="signup-form">
                        <input type="text"
                            value={this.state.email}
                            onChange={this.update('username')}
                            placeholder="Username"
                        />
                        <br/>
                        <input type="password"
                            value={this.state.password}
                            placeholder="Password"
                            />
                        <br/>
                        <input type="password"
                            value={this.state.password2}
                            placeholder="Confirm Password"
                        />
                        <button className="form-submit">Create Account</button>
                        <br/>
                        {this.props.otherForm}
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(LoginForm);