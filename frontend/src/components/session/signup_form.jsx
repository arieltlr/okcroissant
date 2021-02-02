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
        debugger
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
            .then(() => this.props.closeModal())
            .then(this.props.history.push('/main'))
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
                            value={this.state.username}
                            onChange={this.update('username')}
                            placeholder="Username"
                        />
                        <br/>
                        <input type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            placeholder="Password"
                            />
                        <br/>
                        <input type="password"
                            value={this.state.password2}
                            onChange={this.update('password2')}
                            placeholder="Confirm Password"
                        />
                        <br/>
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