const initialState = '';

import { SELECT_CAMS } from '../action-types';

export default function(state=initialState, action) {
  switch (action.type) {
    case SELECT_CAMS:
      return action.payload;
    default:  
      return state;
  }
}