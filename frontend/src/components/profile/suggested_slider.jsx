import React from 'react';
import ReactDOM from 'react-dom'
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
        let items;
        debugger
        const { breads } = this.props;
        if (Object.keys(breads).length === 0) {
            return null;
        } else {
            debugger
            items = breads.map(bread => {
                return (
                        <div>
                            <Link to={`/bread/${bread._id}`}> <img className="profile-carousel-image" src={bread.image} /></Link>
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