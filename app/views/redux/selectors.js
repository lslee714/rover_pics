export const getRoverState = store => store.rovers;
export const getMetadataState = store => store.metadata;

export const getSelectedRoverIds = store => getRoverState(store) ? 
  getRoverState(store).selectedIds : [];

export const getMaxSolState = store => getMetadataState(store) ?
  getMetadataState(store).maxSol : 0;