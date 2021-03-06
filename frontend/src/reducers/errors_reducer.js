import { combineReducers } from 'redux';

import SessionErrorsReducer from './session_errors_reducer';
import BreadErrorsReducer from './bread_errors_reducer';
import ReviewErrorsReducer from '../reducers/review_errors_reducer'

export default combineReducers({
  session: SessionErrorsReducer,
  bread: BreadErrorsReducer,
  review: ReviewErrorsReducer
});