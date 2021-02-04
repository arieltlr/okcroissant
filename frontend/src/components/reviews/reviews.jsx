import React from 'react';

class Reviews extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
       this.props.fetchAllReviews();
    }
    render(){
        debugger
        return (
            <div>
                <h1>
                    Reviews page!
                    
                </h1>

            </div>
        )
    }
}

export default Reviews;