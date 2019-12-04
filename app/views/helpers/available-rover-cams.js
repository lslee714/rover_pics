export const AVAILABLE_CAMS = [
  {
    id: 'FHAZ',
    name: 'Front Hazard Avoidance Camera',
  },
  {
    id: 'RHAZ',
    name: 'Rear Hazard Avoidance Camera'
  },
  {
    id: 'MAST',
    name: 'Mast Camera',
  },
  {
    id: 'CHEMCAM',
    name: 'Chemistry and Camera Complex	',
  },
  {
    id: 'MAHLI',
    name: 'Mars Hand Lens Imager',
  },
  {
    id: 'MARDI',
    name: 'Mars Descent Imager',
  },
  {
    id: 'PANCAM',
    name: 'Panoramic Camera',
  },
  {
    id: 'NAVCAM',
    name: 'Navigation Camera',
  },
  {
    id: 'MINITES',
    name: 'Miniature Thermal Emission Spectrometer (Mini-TES)'
  }
];

export const AVAILABLE_ROVERS_BY_ID= {
  'C': {
    name: 'Curiosity',
    cams: ['FHAZ', 'RHAZ', 'MAST', 'CHEMCAM', 'MAHLI', 'MARDI', 'NAVCAM']
  },
  'O': {
    name: 'Opportunity',
    cams: ['FHAZ', 'RHAZ', 'NAVCAM', 'PANCAM', 'MINITES']
  },
  'S': {
    name: 'Spirit',
    cams: ['FHAZ', 'RHAZ', 'NAVCAM', 'PANCAM', 'MINITES']
  }
};

export class AvailableRoverCams {
  constructor() {
    this.rovers = AVAILABLE_ROVERS_BY_ID;
  }

  getRovers() {
    const rovers = [];
    for (let [id, info] of Object.entries(this.rovers)) {
      rovers.push({id: id, name: info.name});
    }
    return rovers;
  }

  getRoverCams(roverId) {
    const rover = this.rovers[roverId];
    return rover.cams;
  }

  getRoverName(roverId) {
    const rover = this.rovers[roverId];
    return rover.name;
  }

  getCamName(camId) {
    const cam = AVAILABLE_CAMS.filter(
      cam => cam.id === camId
    )[0];
    if(!cam) {
      console.log("NO CAM for ", camId);
    }
    return cam ? cam.name : null;
  }
}
