import { SELECT_ROVERS, SELECT_CAMS } from './action-types';

export const selectRovers = roverIds => ({
  type: SELECT_ROVERS,
  payload: {
    selectedIds: roverIds
  }
});

export const selectCams = camIds => (
  {
    type: SELECT_CAMS,
    payload: {
      selectedCams: camIds
    }
  }
);  