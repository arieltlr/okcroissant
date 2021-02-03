import { combineReducers } from 'redux';
import session from './session_api_reducer';
import errors from './errors_reducer';
import modalReducer from './modal_reducer';
import uiReducer from './ui_reducer';
import breadProfileReducer from './bread_profile_reducer';
import breadReducer from './bread_reducer';

const RootReducer = combineReducers({
    session,
    errors,
    modal: modalReducer,
    ui: uiReducer,
    breadProfile: breadProfileReducer,
    bread: breadReducer
});

export default RootReducer;