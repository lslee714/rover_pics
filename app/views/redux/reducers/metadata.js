const initialState = 0;

import { LOAD_MAX_SOL } from '../action-types';

export default function(state=initialState, action) {
  switch (action.type) {
    case LOAD_MAX_SOL:
      return action.payload;
    default:  
      return state;
  }
}