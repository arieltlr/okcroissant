import React from 'react';
import { Link } from 'react-router-dom';
import SuggestedSliderContainer from './suggested_slider_container';
import Footer from '../splash/footer';
import sadFace from '../../images/sad_face.png';

class ProfileShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getBreadProfileResponses(this.props.user.id)
    }

    render(){
        const hasProfile = Boolean(this.props.breadProfile.thin !== undefined);
         
        let formButton;
        if(hasProfile){
                formButton = <button className="link-to-form" onClick={() => this.props.openModal('edit-bprofile')}>
                Edit Your Bread Profile
                </button>
        } else{
            formButton = 
                <div className="create-bread-profile">
                    <Link className="link-to-form2" to="/createBreadprofile">
                        Complete Your Bread Profile
                    </Link>
                </div>
        } 
            return (
                <div>
                <div className="main-profile-display">
                    <h1 className="display-username"><span>Welcome Back, </span>{this.props.user.username}.</h1>
                    <div className="profile-show-container"> 
                        <div className="prof-items-container">
                            <div className="name-container">
                                <div className="prof-pic-container">
                                <div className="profile-pic"></div>
                                </div>
                                <div className="user-info-container">
                                    {formButton}
                                </div>
                            </div>
                        </div>
                        {
                            hasProfile ? (
                                <div className="breadProfile-suggestions">
                                        <label className="breadProfile-label">Based on your Bread Profile, We recommend:</label>
                                        <SuggestedSliderContainer breadProfile={this.props.breadProfile} />
                                </div>  
                            ): (
                                <div className="breadProfile-suggestions">
                                    <div className="noMatchContainer">
                                        <div className="noMatch">We're sorry, there is currently no bread that match your <span className="editbread">bread profile</span>.</div>
                                            <br /> 
                                            <img className="noMatchImg" src={sadFace} />
                                        <div className="noMatch">Please <span className="editbread">complete / edit your bread profile</span> to generate matches!</div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
                <Footer />
                </div>
            )
        }
}

export default ProfileShow;