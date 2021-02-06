import React from 'react';

class Reviews extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            fetch: false,
        }

        this.editReview.bind(this);
    }

    reRender() {
        this.setState({fetch: !this.state.fetch});
        this.props.fetchBreadReviews(this.props.breadId);
    }
    editReview(reviewId){
        debugger
        this.props.fetchReviewEdit(reviewId)
            .then(()=> this.props.openModal('edit-review'))
    }
    render(){
        if (!this.state.fetch){
            this.reRender()
        }
        const reviews = Object.values(this.props.reviews).map((review, i) => {
            debugger
                return(
                    
                    <div key={i} className="review-container">
                        
                        <div className="review-info">
                            <div className="review-body-holder">
                                <p className="review-body">{review.body}</p>
                            </div>
                            <p className="review-author">Author: {review.author}</p>
                            <div className="button-container">
                                {/* <button className="button-splash1" onClick={()=> this.props.deleteReview(review._id)}>Delete</button> */}
                                { this.props.user.id === review.user ? 
                                <button className="review-author" onClick={() => this.editReview(review._id)}> Update Review</button>
                                : null}
                            </div>
                            
                        </div>
                    </div>  
            )
            })
        if (reviews.length > 0){
            return (
            <div className="outer-review-container">
                    {reviews}
            </div>
        )
        } else {
            return(
                <div>
                    <h1>There aren't any reviews for this bread yet</h1>
                </div>
            )
        }
    }
}

export default Reviews;