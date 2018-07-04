import axios from 'axios';

export const FETCH_USER = 'FETCH_USER';

export function fetchUser() {
  return {
    type: FETCH_USER,
    payload: [1,2,3]
  };
}
