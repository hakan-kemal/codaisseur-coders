// const initialState = null;
const initialState = [];

export default function developersReducer(state = initialState, action) {
  switch (action.type) {
    case 'DEVELOPERS_FETCHED': {
      // => Ask yourself: what is action.payload?
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
