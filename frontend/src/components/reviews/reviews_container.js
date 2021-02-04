import { connect } from 'react-redux';
import { fetchAllReviews, fetchBreadReviews, fetchUsersReviews } from '../../actions/review_actions';
import Reviews from './reviews';

const mstp = (state) => {
    // debugger
    return {
        reviews: state.reviews.data,
        user: state.session.user

    };
};

const mdtp = (dispatch) => {
    return {
        fetchAllReviews: () => dispatch(fetchAllReviews()),
        fetchBreadReviews: breadId => dispatch(fetchBreadReviews(breadId)),
        fetchUsersReviews: userId => dispatch(fetchUsersReviews(userId)),
    }
}

export default connect(mstp, mdtp)(Reviews);