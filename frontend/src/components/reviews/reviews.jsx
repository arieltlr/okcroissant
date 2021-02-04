import React from 'react';

class Reviews extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        // debugger
       this.props.fetchAllReviews();
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
                            <p>Bread Name {review.bread}</p>
                            <p>Bread Image</p>
                            <p>{review.body}</p>
                            <p>Review by: {review.user}</p>
                        </div>
                    </div>  
                </div>)
            })
        return (
            <div>
                    {reviews}
            </div>
        )
        
    }
}

export default Reviews;