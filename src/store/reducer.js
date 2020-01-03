import { combineReducers } from 'redux';
import developersReducer from './developers/reducer';

export default combineReducers({
  developers: developersReducer
  // we can add more "slice" subreducers here later on...
});
