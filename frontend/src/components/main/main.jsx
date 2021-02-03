import React from 'react';
import Footer from '../splash/footer';
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// THIS IS THE MAIN SPLASH 

// onclickk
class MainPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.bread
        debugger
    }

    componentDidMount(){
        debugger
        this.props.fetchBreads();
        debugger
    }


    render() {
        return (
            <div>
                <div className="slider">
                    <div className="slide">bread item</div>
                    <div className="slide">bread item</div>
                    <div className="slide">bread item</div>
                    <div className="slide">bread item</div>
                    <div className="slide">bread item</div>
                    <div className="slide">bread item</div>
                    <div className="slide">bread item</div>
                    <div className="slide">bread item</div>
                    <div className="slide">bread item</div>
                    <div className="slide">bread item</div>
                    
                </div>
                <div>
                    text box
                </div>
                <div>
                    <Footer/>
                </div>
            </div>

        )
    }
}

export default MainPage;