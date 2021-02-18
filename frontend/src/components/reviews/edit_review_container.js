import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import EditReview from './edit_review';
import {updateReview} from '../../actions/review_actions'

const msp = (state, props )=>{
    const reviewId = Object.keys(state.reviewEdit)[0];
    return ({
       user: state.session.user.id,
       bread: Object.keys(state.bread)[0],
       author: state.session.user.username,
       review: state.reviewEdit[reviewId],
       errors: state.errors.review,
    })
}


const mdp = dispatch=>{
    return ({

        updateReview: review => dispatch(updateReview(review)),
    })
}
export default withRouter(connect(msp, mdp)(EditReview));
