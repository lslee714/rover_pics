import { SELECT_ROVERS, SELECT_CAMS, GET_MAX_SOL, LOAD_MAX_SOL, SUBMIT_FORM, RESET_FORM, SET_PICS } from './action-types';

export const selectRovers = rovers => ({
  type: SELECT_ROVERS,
  payload: {
    selected: rovers
  }
});

export const selectCams = camIds => (
  {
    type: SELECT_CAMS,
    payload: {
      selectedIds: camIds
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
    payload: maxSol
  }
);

export const submitForm = () => (
  {
    type: SUBMIT_FORM
  }
);

export const resetForm = () => (
  {
    type: RESET_FORM
  }
);

export const setPics = pics => (
  {
    type: SET_PICS,
    payload: pics
  }
);