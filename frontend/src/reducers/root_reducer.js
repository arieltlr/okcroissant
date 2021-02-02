import { combineReducers } from 'redux';
import session from './session_api_reducer';
import errors from './errors_reducer';
import modalReducer from './modal_reducer';
import uiReducer from './ui_reducer';
import breadMatchesReducer from './bread_matches_reducer';

const RootReducer = combineReducers({
    session,
    errors,
    modal: modalReducer,
    ui: uiReducer,
    breadMatches: breadMatchesReducer
});

export default RootReducer;