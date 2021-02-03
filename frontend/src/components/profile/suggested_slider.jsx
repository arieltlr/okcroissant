import React from 'react';
import Slider from 'react-slick';

class SuggestedSlider extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidUpdate(){
        this.props.fetchSuggestBreads(this.props.breadProfile);
    }

    render() {
        debugger
        const { breads } = this.props;
        const settings = {
            dots: true, 
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            speed: 3000,
            autoplaySpeed: 3000,
            cssEase: "linear",
            className: "profile-slides"
        }

        return (
              <div>
                <Slider {...settings}>
                    
                </Slider> 

             </div>
        )
    }
}
 
export default SuggestedSlider;