import { connect } from 'react-redux';
import BreadShow from './bread_show';
import { fetchABread } from '../../actions/bread_actions';
import { createUserCartItem, fetchUserCartItems } from "../../actions/cart_actions";

const mapStateToProps = (state, ownProps) => {
    // debugger
    return {
        // array: state.bread.map(bread => bread.id),
        bread: state.bread[ownProps.match.params.breadId],
        userId: state.session.user.id
    }
}

const mapDispatchToProps = dispatch => {
    return{
        fetchABread: breadId => dispatch(fetchABread(breadId)),
        createUserCartItem: item => dispatch(createUserCartItem(item)),
        fetchUserCartItems: userId => dispatch(fetchUserCartItems(userId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BreadShow)
