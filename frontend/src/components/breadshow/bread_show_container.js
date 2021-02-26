import { connect } from 'react-redux';
import BreadShow from './bread_show';
import { fetchSingleBread} from '../../actions/bread_actions';
import { createUserCartItem } from "../../actions/cart_actions";
import { openModal } from '../../actions/modal_actions';



const mapStateToProps = (state, ownProps) => {
    return {
        // array: state.bread.map(bread => bread.id),
        bread: state.bread[ownProps.match.params.breadId],
        user: state.session.user.id
    }
}

const mapDispatchToProps = dispatch => {
    return{
        fetchABread: breadId => dispatch(fetchSingleBread(breadId)),
        createUserCartItem: item => dispatch(createUserCartItem(item)),
        openModal: (modal) => dispatch(openModal(modal)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BreadShow)
