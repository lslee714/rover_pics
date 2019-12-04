import { SELECT_ROVER } from './action-types';

export const selectRover = idRover => ({
  type: SELECT_ROVER,
  payload: {
    id: idRover
  }
}) 