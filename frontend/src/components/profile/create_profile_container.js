import { connect } from 'react-redux';
import { createBreadProfile } from '../../actions/bread_profile_actions';


import  NewProfile from './create_profile_form'
const msp = state =>{
    return ({
       user: state.session.user
    })
}

const mdp = dispatch=>{
    return ({
    createBreadProfile: breadProfile => dispatch(createBreadProfile(breadProfile)),
    })
}
export default connect(msp, mdp)(NewProfile);
