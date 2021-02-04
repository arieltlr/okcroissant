import React from 'react';
import { Link } from 'react-router-dom';
import SuggestedSliderContainer from './suggested_slider_container';

class ProfileShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        // debugger
        this.props.getBreadProfileResponses(this.props.user.id)
    }

    render(){
        // debugger
        const hasProfile = Boolean(this.props.breadProfile.thin !== undefined);
        let formButton;
        if(hasProfile){
                formButton = <button className="link-to-form" onClick={() => this.props.openModal('edit-bprofile')}>
                Edit Your Bread Profile
                </button>
        } else{
            formButton = 
                <Link className="link-to-form" to="/createBreadprofile">
                    Complete Your Bread Profile
                </Link>
        } 
            return (
                    <div className="profile-show-container">
                        <div className="prof-items-container">
                            <div className="name-container">
                                <div className="profile-pic"></div>
                                <p className="display-username">{this.props.user.username}</p>
                            </div>
                            <div className="user-info-container">
                                <p className="user-info">Welcome Back</p>
                                {formButton}
                                <Link className="link-to-form" to="/reviews">Your Bread Reviews</Link>
                            </div>
                        </div>
                        <div className="breadProfile-suggestions">
                                <label className="breadProfile-label">Based on your Bread Profile, We recommend:</label>
                                {/* <SuggestedSliderContainer breadProfile={this.props.breadProfile} /> */}
                            </div>
                    </div>
            )
        }
}

export default ProfileShow;