import React from 'react';

class Reviews extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        // debugger
        const breadId = this.props.breadId
        this.props.fetchBreadReviews(breadId);
    }
    render(){
        // debugger
        if (Object.values(this.props.reviews).length < 1){
            return null
        }
        // debugger
        const reviews = Object.values(this.props.reviews).map((review, i) => {
            // debugger
                return(
                    
                    <div key={i} className="review-container">
                        
                        <div className="review-info">
                            <div className="review-body-holder">
                                <p className="review-body">{review.body}</p>
                            </div>
                            <p className="review-author">Author: {review.author}</p>
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