import React from 'react';
import Footer from '../splash/footer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import MainImage from "../../images/main-img1.jpg"
import MainImage2 from "../../images/main-img2.jpg"
import MainImage3 from "../../images/image3.jpg"
// THIS IS THE MAIN SPLASH 
// onclickk
class MainPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.bread
        debugger
    }

    componentDidMount(){
        this.props.fetchBreads();
    }


    render() {
        const settings = {
            dots:true,
            fade: true,
            infinite:true,
            speed: 500,
            slidesToshow:1,
            arrows: true,
            slidesToScroll:1,
            className: "slider variable-width",
        };
        const arrayed = this.props.breads[0]
        let items;
        if (arrayed !== undefined) {
            items = arrayed.map((bread, i) => {
                return (
                    <div className="carasal" key={i}>
                        <img className="bread-carasal" width="100%" src={bread.image} />
                        <div className="master">
                            <div className="bread-description-main">
                                <p className="bread-description">{bread.description}</p>
                            </div>
                            <div className="bread-name-origin-master">
                                <p className="bread-name">{bread.name}</p>
                                <p className="bread-origin">From:{bread.origin}</p>
                            </div>
                            <div className="position-button">
                                <button>Show Page Button</button>
                            </div>
                        </div>
                    </div>
                )
            })
        }
        
        return (
            <div>
                <div className="slider">
                    <Slider {...settings}>
                        {items}
                    </Slider>
                </div>
                
                <div className="main-content-master">
                    <div className="main-content">
                        <p>Welcome to our wonderful bread delivery service app. We would love for you to try out new breads from all around the world.</p>
                    </div>
                    <img className="main-pic-1" src={MainImage} alt="man holding bread" />
                </div>
                <div className="main-content-master">
                    <img className="main-pic-1" src={MainImage2} alt="man holding bread" />
                    <div className="main-content">
                        <p>Exquisite bread from the anywhere in the country at your fingertips</p>
                    </div>
                </div>
                <div className="main-content-master">
                    <div className="main-content">
                        <p>Promise delivery right at your doorstep. Ready for breakfast from anywhere in the world</p>
                    </div>
                    <img className="main-pic-1" src={MainImage3} alt="man holding bread" />
                </div>
                <div className="footer">
                    <Footer/>
                </div>
            </div>

        )
    }
}

export default MainPage;