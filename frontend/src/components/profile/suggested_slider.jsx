import React from 'react';
import Slider from 'infinite-react-carousel';
import { Link } from 'react-router-dom';

class SuggestedSlider extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // this.props.getBreadProfileResposes(this.props.user.id)
        this.props.fetchSuggestBreads(this.props.breadProfile);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.breadProfile !== this.props.breadProfile) {
            this.props.fetchSuggestBreads(this.props.breadProfile)
        }
    }

    render() {
        let items;

        const settings = {
            autoplay: true,
            autoplaySpeed: 3000,
            autoplayScroll: 1,
            dots: true,
            dotsClass: "carousel-dots"
        }
        // debugger
        let {breads} = this.props;
        debugger
        if (Object.keys(breads).length === 0 || Object.keys(breads).length === 20) {
            return [];
        } else {
            debugger
            breads = Object.values(breads)
            items = breads.map(bread => {
                debugger
                return (
                    <div key = {bread._id}>
                            <Link to={`/bread/${bread._id}`} style={{ textDecoration: 'none' }}> <img className="profile-carousel-image" src={bread.image} /></Link>
                            <p className="profile-carousel-name">{bread.name}</p>
                    </div>
                )
            })
            // for (const [key, value] of Object.entries(breads)){
            //         return (
            //             <div key = {value._id}>
            //                     <Link to={`/bread/${value._id}`} style={{ textDecoration: 'none' }}> <img className="profile-carousel-image" src={value.image} /></Link>
            //                     <p className="profile-carousel-name">{value.name}</p>
            //             </div>
            //         )
            // }
        }
        return (
            <div className="profile-carousel">
                <Slider {...settings}>
                    {items}
                </Slider>
            </div>
        )
    }
}

export default SuggestedSlider;