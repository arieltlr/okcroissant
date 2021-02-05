import React from 'react';

class CreateReviewForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: this.props.author,
            user: this.props.user,
            bread: this.props.bread,
            body:''
        }
        // this.errors = [];
        this.handleSubmit =this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        // debugger
        e.preventDefault();
        this.props.createReview(this.state)
    }

    update(key){
        return e => this.setState({[key]: e.currentTarget.value});
    }

    render(){
        const {errors} = this.props
        
        return (
            <div>
                <h3 className="welcome-message">Write a New Review</h3>
                <p>{errors.body}</p>
                <form className="review-form1" onSubmit= {this.handleSubmit}>
                    <textarea name="review-body-new" id="review-body" value={this.state.body} onChange={this.update('body')}></textarea>
                    {/* <p className="author-name">Author: {this.props.user.username}</p> */}
                    <button className="button-splash1" id="review-button"type='submit'> Create Review</button>
                </form>
            </div>
        )
    }
}

export default CreateReviewForm;