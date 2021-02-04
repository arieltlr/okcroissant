import React from 'react';
import Slider from 'react-slick';

class SuggestedSlider extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        // this.props.getBreadProfileResponses(this.props.user.id);
        this.props.fetchSuggestBreads(this.props.breadProfile);
        debugger
    }

    render() {
        debugger
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
        const { breads } = this.props;
        if (Object.keys(breads).length === 0) {
            debugger
            return null;
        } else {
            debugger
            return (
                <div>
                    <Slider {...settings}>
                        {
                            breads.map(bread => {
                                debugger
                                return (
                                    <img width="1000%" src={bread.image} />
                                )
                            })
                        }
                    </Slider> 

                </div>
            )
        }
    }
}
 
export default SuggestedSlider;