import { FETCH_USER } from '../actions/index';

export default function(state=[], action) {
  // console.log('Actionss', action);
  switch (action.type) {
    case FETCH_USER:
      return [action.payload.data, ...state];
  }
  return state;
}
