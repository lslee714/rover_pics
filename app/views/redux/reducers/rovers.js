const initialState = '';

import { SELECT_ROVERS } from '../action-types';

export default function(state=initialState, action) {
  switch (action.type) {
    case SELECT_ROVERS:
      return action.payload;
    default:  
      return state;
  }
}