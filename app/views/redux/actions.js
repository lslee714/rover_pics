import { SELECT_ROVER } from './action-types';

export const selectRovers = roverIds => ({
  type: SELECT_ROVER,
  payload: {
    selectedIds: roverIds
  }
});