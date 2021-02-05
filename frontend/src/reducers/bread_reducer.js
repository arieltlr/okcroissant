import { RECEIVE_ALL_BREADS, RECEIVE_A_BREAD, RECEIVE_SUGGESTED_BREADS } from '../actions/bread_actions';
import {RECEIVE_USER_LOGOUT} from '../actions/session_actions'

const removeBreads = {};
const breadReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_ALL_BREADS:
            let array = {}
            action.breads.data.forEach(bread => {
                array[bread._id] = bread
            })
            return array
        case RECEIVE_A_BREAD:
            const newState = Object.assign({}, state, { [action.bread.data._id]: action.bread.data })
            //   
            return newState;
        case RECEIVE_SUGGESTED_BREADS:
            //  
            return action.breads.data
        case RECEIVE_USER_LOGOUT:
            return removeBreads;
        default: 
            return state;
    }
}

export default breadReducer;