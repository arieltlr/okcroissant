import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import CreateReviewForm from './create_review_form';
import {createReview} from '../../actions/review_actions'

const msp = (state)=>{
    return ({
       user: state.session.user.id,
       bread: Object.keys(state.bread)[0],
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
