import React from 'react';

class Reviews extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            fetch: false,
        }

        this.editReview.bind(this);
    }

    componentDidMount() {
        // this.setState({fetch: !this.state.fetch});
        this.props.fetchBreadReviews(this.props.breadId);
    }
    editReview(reviewId) {

        this.props.fetchReviewEdit(reviewId)
            .then(() => this.props.openModal('edit-review'))
    }
    render() {
        if (!this.props.reviews) {
            return null;
        }
        const reviews = Object.values(this.props.reviews).map((review, i) => {

            return (

                <div key={i} className="review-container">

                    <div className="review-info">
                        <div className="review-body-holder">
                            <p className="review-body">{review.body}</p>
                        </div>
                        <p className="review-author">From: {review.author}</p>
                        <div >
                            {this.props.user.id === review.user ?
                                <div className="review-owner-button-container">
                                    <button className="review-owner" onClick={() => this.editReview(review._id)}>Update</button>
                                    <button className="review-owner" onClick={() => this.props.deleteReview(review._id)}>Delete</button>
                                </div>
                                : <div className="space-holder"> </div>}
                        </div>

                    </div>
                </div>
            )
        })
        if (reviews.length > 0) {
            return (
                <div className="outer-review-container">
                    {reviews}
                </div>
            )
        } else {
            return (
                <div>
                    <h1 className="no-reviews">There aren't any reviews for this bread yet</h1>
                </div>
            )
        }
    }
}

export default Reviews;