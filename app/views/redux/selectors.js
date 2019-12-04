export const getRoverState = store => store.rovers;

export const getSelectedRoverIds = store => getRoverState(store) ? 
  getRoverState(store).selectedIds : [];