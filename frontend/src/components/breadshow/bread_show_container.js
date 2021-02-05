import { connect } from 'react-redux';
import BreadShow from './bread_show';
import { fetchABread } from '../../actions/bread_actions';
import { createUserCartItem } from "../../actions/cart_actions";

const mapStateToProps = (state, ownProps) => {
    //  
    return {
        // array: state.bread.map(bread => bread.id),
        bread: state.bread[ownProps.match.params.breadId],
        user: state.session.user.id
    }
}

const mapDispatchToProps = dispatch => {
    return{
        fetchABread: breadId => dispatch(fetchABread(breadId)),
        createUserCartItem: item => dispatch(createUserCartItem(item)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BreadShow)
