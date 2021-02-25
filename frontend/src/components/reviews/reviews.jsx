import React from 'react';

class Reviews extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
         
       this.props.fetchAllReviews();
    }
    render(){

        if (this.props.reviews.body === undefined){
            return null
        }else{
            const reviews = this.props.reviews.map(review => {
                <div>
                    <div>
                        <div>
                            <p>Bread Name</p>
                            <p>Bread Image</p>
                            <p>{review.body}</p>
                        </div>
                    </div>
                </div>
            })
        }
        return (
            <div>Hello Reviews</div>
        )
        
    }
}

export default Reviews;