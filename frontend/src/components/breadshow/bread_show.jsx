import React from 'react';
import ReviewShowContainer from '../reviews/review_show_container';

import CreateReviewContainer from '../reviews/create_review_container'

class BreadShow extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        // debugger
        this.props.fetchABread(this.props.match.params.breadId)
    }

    render(){
        // debugger
        const { bread } = this.props;
        if (!bread) {
            return null;
        } else {
            return (
                <div>
                    <div className="bread-show-container">
                        <div className="bread-show-intro">
                            <div>
                                <img className="bread-show-img" src={bread.image} />
                            </div>
                            <div className="bread-show-name-main">
                                <div className="bread-show-name-container">
                                    <label className="bread-show-name-label">Name</label>
                                    <h3 className="bread-show-name">{bread.name}</h3>
                                </div>
                                <div className="bread-show-info-container">
                                    <div className="bread-show-info" >
                                        <div className="bread-show-origin-container">
                                            <label className="bread-show-origin-label">Origin</label>
                                            <p className="bread-show-origin">{bread.origin}</p>
                                        </div>
                                        <div className="bread-show-description-container">
                                            <label className="bread-show-description-label">Description</label>
                                            <p className="bread-show-description">{bread.description}</p>
                                        </div>
                                        <div className="bread-show-price-container">
                                            <label className="bread-show-price-label">Price</label>
                                            <p className="bread-show-price">${bread.price}</p>
                                        </div>
                                        <div className="bread-show-add-button">
                                            <button className="bread-show-button">Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <ReviewShowContainer bread={bread}/>
                        </div>
                        <div>
                            <CreateReviewContainer />
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default BreadShow;