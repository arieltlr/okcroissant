import React from 'react';

class BreadShow extends React.Component {
    constructor(props){
        super(props);
        // this.state = this.props.items
        debugger
        this.state = {
            userId: this.props.userId,
            price: "",
            bread: ""
        }
        debugger
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        // debugger
        this.props.fetchABread(this.props.match.params.breadId)
        this.props.fetchUserCartItems(this.props.userId)
    }
    



    handleSubmit(e){
        debugger
        e.preventDefault();
        this.setState({"price": this.props.bread.price,
                        "bread": this.props.bread._id})
        debugger
        this.props.createUserCartItem(this.state)
    }

    render(){
        debugger
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
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <label>Reviews</label>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default BreadShow;