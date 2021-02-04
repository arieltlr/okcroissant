import React from 'react';

class Reviews extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        debugger
       this.props.fetchAllReviews();
    }
    render(){

        
        if (this.props.reviews === undefined){
            return null
        } else{
            const reviews = this.props.reviews.map(review => {
                
            })
            return (
            <div>
                <h1>
    
                </h1>

            </div>
        )
        }
        
    }
}

export default Reviews;