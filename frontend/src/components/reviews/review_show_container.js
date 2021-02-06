import { connect } from 'react-redux';
import { fetchAllReviews, fetchBreadReviews, fetchUsersReviews, fetchOneReview, fetchReviewEdit, deleteReview } from '../../actions/review_actions';
import Reviews from './review_show';
import { withRouter } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';

const mstp = (state, ownProps) => {
    const breadId = ownProps.match.params.breadId;
     
    return {
        reviews: state.reviews,
        user: state.session.user,
        breadId: ownProps.match.params.breadId,
        bread: state.bread[breadId],

    };
};

const mdtp = (dispatch) => {
    return {
        fetchOneReview: (reviewId) => dispatch(fetchOneReview(reviewId)),
        fetchAllReviews: () => dispatch(fetchAllReviews()),
        fetchBreadReviews: breadId => dispatch(fetchBreadReviews(breadId)),
        fetchUsersReviews: userId => dispatch(fetchUsersReviews(userId)),
        openModal: (modal) => dispatch(openModal(modal)),
        fetchReviewEdit: (reviewId) => dispatch(fetchReviewEdit(reviewId)),
        deleteReview: (reviewId) => dispatch(deleteReview(reviewId)),
    }
}

export default withRouter(connect(mstp, mdtp)(Reviews));