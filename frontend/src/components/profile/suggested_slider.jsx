import React from 'react';
import Slider from 'infinite-react-carousel';
import { Link } from 'react-router-dom';
import sadFace from '../../images/sad_face.png';

class SuggestedSlider extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
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
        let {breads} = this.props;
        if (Object.keys(breads).length === 0 || Object.keys(breads).length === 20) {
            return (
                <div className="noMatchContainer">
                    <div className="no-breadProfile-labelcont">
                        <label className="no-breadProfile-label">Based on your Bread Profile, We recommend:</label>
                    </div>
                    <div className="noMatch">We're sorry, there is currently no bread that match your <span className="editbread">bread profile</span>.</div>
                        <br /> 
                        <img className="noMatchImg" src={sadFace} />
                    <div className="noMatch">Please <span className="editbread">complete / edit your bread profile</span> to generate matches!</div>
                </div>
            )
        } else {
            breads = Object.values(breads)
            items = breads.map(bread => {
                return (
                    <div key = {bread._id}>
                            <Link to={`/bread/${bread._id}`} style={{ textDecoration: 'none' }}> <img className="profile-carousel-image" src={bread.image} /></Link>
                            <p className="profile-carousel-name">{bread.name}</p>
                    </div>
                )
            })
            return (
                <div className="carousel-main">
                    <div className="breadProfile-labelcont">
                        <label className="breadProfile-label">Based on your Bread Profile, We recommend:</label>
                    </div>
                    <div className="profile-carousel">
                        <Slider {...settings}>
                            {items}
                        </Slider>
                    </div>
                </div>
            )
        }
    }
}

export default SuggestedSlider;