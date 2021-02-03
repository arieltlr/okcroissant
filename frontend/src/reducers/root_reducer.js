import { combineReducers } from 'redux';
import session from './session_api_reducer';
import errors from './errors_reducer';
import modalReducer from './modal_reducer';
import uiReducer from './ui_reducer';
<<<<<<< HEAD
import breadMatchesReducer from './bread_matches_reducer';
=======
import breadReducer from './bread_reducer';
>>>>>>> bread

const RootReducer = combineReducers({
    session,
    errors,
    modal: modalReducer,
    ui: uiReducer,
<<<<<<< HEAD
    breadMatches: breadMatchesReducer
=======
    bread: breadReducer
>>>>>>> bread
});

export default RootReducer;