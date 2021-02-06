import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import EditReview from './edit_review';
import {updateReview} from '../../actions/review_actions'

const msp = (state, props )=>{
    debugger
    const reviewNum = Object.keys(state.reviews).length - 1;
    const reviewId = Object.keys(state.reviews)[reviewNum];
    return ({
       user: state.session.user.id,
       bread: Object.keys(state.bread),
       author: state.session.user.username,
       review: Object.values(state.reviewEdit)[0],
       errors: state.errors.review,
    })
}


const mdp = dispatch=>{
    return ({

        updateReview: review => dispatch(updateReview(review)),
    })
}
export default withRouter(connect(msp, mdp)(EditReview));
