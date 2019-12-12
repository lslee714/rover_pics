const initialState = [];

import { SET_PICS } from '../action-types';

export default function(state=initialState, action) {
  switch (action.type) {
    case SET_PICS:
      return action.payload;
    default:  
      return state;
  }
}