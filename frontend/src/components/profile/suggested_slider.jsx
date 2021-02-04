import React from 'react';
import Slider from 'react-slick';

class SuggestedSlider extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchSuggestBreads(this.props.breadProfile);
    }

    render() {
        const settings = {
            dots: true, 
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
            speed: 3000,
            autoplaySpeed: 3000,
            cssEase: "linear",
            className: "profile-slides"
        }
        const { breads } = this.props;
        debugger
        if (!breads) {
            return null;
        } else {
            return (
                <div>
                    <Slider {...settings}>
                        {/* {
                            breads.map( bread => {
                                debugger
                                return(
                                    <img width="100%" src={bread.image}></img>
                                )
                            })
                        } */}
                    </Slider> 
                </div>
            )
        }
    }
}
 
export default SuggestedSlider;