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
        debugger
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
                <h3>Create New Review</h3>
                <p>{errors.body}</p>
                <form onSubmit= {this.handleSubmit}>
                    <textarea name="review-body" id="review-body" value={this.state.body} onChange={this.update('body')}></textarea>
                    <button type='submit'> Create Your Review</button>
                </form>
            </div>
        )
    }
}

export default CreateReviewForm;