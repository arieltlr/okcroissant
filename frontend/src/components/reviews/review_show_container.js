import { connect } from 'react-redux';
import { fetchAllReviews, fetchBreadReviews, fetchUsersReviews } from '../../actions/review_actions';
import Reviews from './review_show';
import { withRouter } from 'react-router-dom';

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
        fetchAllReviews: () => dispatch(fetchAllReviews()),
        fetchBreadReviews: breadId => dispatch(fetchBreadReviews(breadId)),
        fetchUsersReviews: userId => dispatch(fetchUsersReviews(userId)),
    }
}

export default withRouter(connect(mstp, mdtp)(Reviews));