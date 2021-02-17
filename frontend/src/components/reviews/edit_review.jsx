import React from 'react';

class EditReview extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            author: this.props.author,
            user: this.props.user,
            bread: this.props.bread,
            body: this.props.review.body,
            id: this.props.review._id,
        }
        // this.errors = [];
        this.handleSubmit =this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        
        e.preventDefault();
        this.props.updateReview(this.state)
    }

    update(key){
        return e => this.setState({[key]: e.currentTarget.value});
    }
    // componentDidMount(){
    //     this.props.fetchSingleReview()
    // }

    render(){
        const {errors} = this.props
        
        return (
            <div>
                <h3 className="welcome-message-edit">Your Review</h3>
                
                <form className="review-form1" onSubmit= {this.handleSubmit}>
                    <textarea name="review-body-new" id="edit-review-body" defaultValue={this.state.body} onChange={this.update('body')}></textarea>
                    {/* <p className="author-name">Author: {this.props.user.username}</p> */}
                    <button className="button-splash1" id="review-button">Update</button>
                    <p>{errors.body}</p>
                </form>
            </div>
        )
    }
}

export default EditReview;