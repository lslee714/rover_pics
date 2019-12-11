export const getRoverState = store => store.rovers;
export const getMetadataState = store => store.metadata;

export const getSelectedRoverNames = store => getRoverState(store) ? 
  getRoverState(store).selected : [];

export const getMaxSolState = store => getMetadataState(store) ?
  getMetadataState(store).maxSol : 0;