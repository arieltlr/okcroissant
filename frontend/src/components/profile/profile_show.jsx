import React from 'react';
import {Link} from 'react-router-dom'

class ProfileShow extends React.Component {
    constructor(props) {
        super(props)
    }

    render(){
        return (
            <div>
                <h1>
                    Profile show!
                </h1>
                <Link to='/createBreadprofile'>Create Profile</Link>
            </div>
        )
    }
}

export default ProfileShow;