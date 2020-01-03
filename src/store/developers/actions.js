import api from '../../api';
// export const DEVELOPERS_FETCHED = 'DEVELOPERS_FETCHED';

function developersFetched(data) {
  return {
    type: 'DEVELOPERS_FETCHED',
    payload: data.rows
  };
}

export function fetchDevelopers(dispatch, _getState) {
  api('/developers').then((data) => {
    // note: just `dispatch` here now
    dispatch(developersFetched(data));
  });
}
