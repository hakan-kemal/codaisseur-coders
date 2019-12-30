import { combineReducers } from 'redux';

export default combineReducers({
  developers: developersReducer
  // we can add more "slice" subreducers here later on...
});

function developersReducer(state = [], action) {
  switch (action.type) {
    case 'SET_HAVING_FUN': {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
