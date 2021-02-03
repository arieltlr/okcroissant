import { RECEIVE_ALL_BREADS, RECEIVE_A_BREAD, RECEIVE_SUGGESTED_BREADS } from '../actions/bread_actions';

const _nullErrors = [];

const BreadErrorsReducer = (state = _nullErrors, action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_ALL_BREADS: 
            return _nullErrors;
        case RECEIVE_A_BREAD:
            return _nullErrors;
        case RECEIVE_SUGGESTED_BREADS:
            return _nullErrors;
        default: 
            return state;
    }
}

export default BreadErrorsReducer;