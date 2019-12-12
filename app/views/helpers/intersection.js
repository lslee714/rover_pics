
export const intersection = (arrayOfArrays) => {
  if(arrayOfArrays.length === 1) {
    return arrayOfArrays[0];
  } 
  const result = [];
  for(let i = 0; i < arrayOfArrays.length; i++) {
    const currentList = arrayOfArrays[i];
    for(let y = 0; y < currentList.length; y++) {
        const currentValue = currentList[y];
      if(!result.includes(currentValue)) {
        let existsInAll = true;
        for(let x = 0; x < arrayOfArrays.length; x++) {
          if(!arrayOfArrays[x].includes(currentValue)) {
            existsInAll = false;
            break;
          }
        }
        if(existsInAll) {
          result.push(currentValue);
        }
      }
    }
  }
  return result;
};