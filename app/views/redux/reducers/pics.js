const initialState = [];

import { SET_PICS, RESET_PICS } from '../action-types';

export default function(state=initialState, action) {
  switch (action.type) {
    case SET_PICS:
      return action.payload;
    case RESET_PICS:
      return {
        urls: []
      };
    default:  
      return state;
  }
}