const initialState = '';

import { SELECT_ROVER } from '../action-types';

export default function(state=initialState, action) {
  switch (action.type) {
    case SELECT_ROVER:
      return action.payload.id
    default:
      return state;
  }
}