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

export const ROVERS_AND_CAMS= {
  'Curiosity': ['FHAZ', 'RHAZ', 'MAST', 'CHEMCAM', 'MAHLI', 'MARDI', 'NAVCAM'],
  'Opportunity': ['FHAZ', 'RHAZ', 'NAVCAM', 'PANCAM', 'MINITES'],
  'Spirit': ['FHAZ', 'RHAZ', 'NAVCAM', 'PANCAM', 'MINITES']
};

export class AvailableRoverCams {
  constructor() {
    this.rovers = ROVERS_AND_CAMS;
  }

  getRoverNames() {
    return Object.keys(this.rovers);
  }

  getRoverCams(roverName) {
    return this.rovers[roverName];
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
