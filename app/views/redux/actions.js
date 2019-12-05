import { SELECT_ROVERS, SELECT_CAMS, GET_MAX_SOL, LOAD_MAX_SOL } from './action-types';

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

export const getMaxSol = roverNames => (
  {
    type: GET_MAX_SOL,
    payload: {
      roverNames: roverNames
    }
  }
);


export const loadMaxSol = maxSol => (
  {
    type: LOAD_MAX_SOL,
    payload: {
      maxSol: maxSol
    }
  }
);