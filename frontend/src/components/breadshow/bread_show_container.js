import { connect } from 'react-redux';
import BreadShow from './bread_show';
import { fetchABread } from '../../actions/bread_actions';

const mapStateToProps = (state, ownProps) => {
    debugger
    return {
        bread: state.bread[ownProps.match.params.breadId]
    }
}

const mapDispatchToProps = dispatch => {
    return{
        fetchABread: breadId => dispatch(fetchABread(breadId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BreadShow)
