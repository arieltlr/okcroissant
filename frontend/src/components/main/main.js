import React from 'react';
import Footer from '../splash/footer';

// THIS IS THE MAIN SPLASH 

// onclickk
class MainPage extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (
            <div>
                <div className="slider">
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