import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import CreateReviewForm from './create_review_form';
import {createReview} from '../../actions/review_actions'

const msp = (state, ownprops )=>{
    // debugger
    return ({
       user: state.session.user.id,
       bread: ownprops.match.params.breadId,
       author: state.session.user.username,
       errors: state.errors.review
    })
}

const mdp = dispatch=>{
    return ({
        createReview: review => dispatch(createReview(review)),
    })
}
export default withRouter(connect(msp, mdp)(CreateReviewForm));
