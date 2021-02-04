import React from 'react';
import Carousel from 'react-elastic-carousel';
import { Link } from 'react-router-dom';

class SuggestedSlider extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        // this.props.getBreadProfileResposes(this.props.user.id)
        this.props.fetchSuggestBreads(this.props.breadProfile);
    }

    componentDidUpdate(prevProps, prevState){
        if(prevProps.breadProfile !== this.props.breadProfile) {
            this.props.fetchSuggestBreads(this.props.breadProfile)
        }
    }

    render() {
        const breakpoints= [
            {width: 1, itemsToShow:1},
            {width: 550, itemsToShow: 2, itemsToScroll: 2}
        ]
        let items;
        const { breads } = this.props;
        if (Object.keys(breads).length === 0) {
            return null;
        } else {
            items = breads.map(bread => {
                return (
                        <div>
                            <Link to={`/breads/${bread._id}`}> <img className="profile-carousel-image" src={bread.image} /></Link>
                            <p className="profile-carousel-name">{bread.name}</p>
                        </div>
                    )
            })
        }
        return (
            <div className="profile-carousel">
                <Carousel>
                    {items}
                </Carousel>
            </div>
        )
    }
}
 
export default SuggestedSlider;