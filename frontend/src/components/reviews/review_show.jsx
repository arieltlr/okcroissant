import React from 'react';

class Reviews extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const breadId = this.props.breadId
        this.props.fetchBreadReviews(breadId);
    }
    render(){
        // debugger
        if (this.props.reviews === undefined){
            return null
        }
        debugger
        const reviews = this.props.reviews.map(review => {
            // debugger
                return(
                <div>
                    <div className="review-container">
                        <div className="review-info">
                            <p>Bread Name {this.props.bread.name}</p>
                            <p>{review.body}</p>
                            <p>Review by: {review.author}</p>
                        </div>
                    </div>  
                </div>)
            })
        if (reviews.length > 0){
            return (
            <div>
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