import { connect } from 'react-redux';
import { fetchAllReviews, fetchBreadReviews, fetchUsersReviews } from '../../actions/review_actions';
import Reviews from './review_show';
import { withRouter } from 'react-router-dom';

<<<<<<< HEAD:frontend/src/components/reviews/reviews_container.js
const mstp = (state) => {
=======
const mstp = (state, ownProps) => {
    const breadId = ownProps.match.params.breadId;
>>>>>>> ebb79a11e6575ae4b8fa1680b91e60ddb115b0fd:frontend/src/components/reviews/review_show_container.js
    // debugger
    return {
        reviews: state.reviews.data,
        user: state.session.user,
        breadId: ownProps.match.params.breadId,
        bread: state.bread[breadId]

    };
};

const mdtp = (dispatch) => {
    return {
        fetchAllReviews: () => dispatch(fetchAllReviews()),
        fetchBreadReviews: breadId => dispatch(fetchBreadReviews(breadId)),
        fetchUsersReviews: userId => dispatch(fetchUsersReviews(userId)),
    }
}

export default withRouter(connect(mstp, mdtp)(Reviews));