import React from 'react';
import ReviewShowContainer from '../reviews/review_show_container';
import Footer from '../splash/footer';
import CreateReviewContainer from '../reviews/create_review_container'

class BreadShow extends React.Component {
    constructor(props){
        super(props);
        // this.state = this.props.items
        //  
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        this.props.fetchABread(this.props.match.params.breadId);
    }
    



    handleSubmit(e){
        //  
        e.preventDefault();
        alert("Added to the Cart!");
        this.state = {
            user_id: this.props.user,
            price: this.props.bread.price,
            bread_id: this.props.bread._id
        }
        //  
        this.props.createUserCartItem(this.state)
    }

    render(){
        //  
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
                                            <button onClick={this.handleSubmit} className="bread-show-button">Add to Cart</button>
                                        </div>
                                        <div className="bread-show-add-button">
                                            <button onClick={()=> this.props.openModal('review')} className="bread-show-button1">Write a Review</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h2 className="review-header">Reviews:</h2>
                            <ReviewShowContainer bread={bread}/>
                        </div>
                        <Footer />
                    </div>
                </div>
            )
        }
    }
}

export default BreadShow;