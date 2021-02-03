import React from 'react';
import { Link } from 'react-router-dom';
import SuggestedSliderContainer from './suggested_slider_container';

class ProfileShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getBreadProfileResponses(this.props.user.id)
    }

    render(){
        debugger
        return (
            <div className="profile-show-container">
                <div className="prof-items-container">
                    <div className="name-container">
                        <div className="profile-pic"></div>
                        <p className="display-username">{this.props.user.username}</p>
                    </div>
                    <div className="user-info-container">
                        {/* <p className="user-info">{this.props.user.username}</p> */}
                        <Link className="link-to-form" to="/createBreadprofile">Your Bread Profile</Link>
                        <p className="bread-reviews">Your Bread Reviews</p>
                    </div>
                    <div>
                        <SuggestedSliderContainer />
                    </div>
                </div>
                
            </div>
        )
    }
}

export default ProfileShow;