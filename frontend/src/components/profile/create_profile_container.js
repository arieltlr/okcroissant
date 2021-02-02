import { connect } from 'react-redux';

import  NewProfile from './create_profile_form'
const msp = state =>{
    return ({
       user: state.session.user
    })
}

const mdp = dispatch=>{
    return ({
    createBreadProfile: breadProfile => dispatch(createBreadProfile(breadProfile)),
    updateBreadProfile: breadProfile => dispatch(updateBreadProfile(breadProfile))
    })
}
export default connect(msp, mdp)(NewProfile);
