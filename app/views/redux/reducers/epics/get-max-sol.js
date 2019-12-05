import { ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { forkJoin, of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';

import { GET_MAX_SOL } from '../../action-types';
import { loadMaxSol } from '../../actions';

const manifestUrl = 'https://api.nasa.gov/mars-photos/api/v1/manifests/{roverName}?api_key=DEMO_KEY';

export const getMaxSolEpic = action$ => action$.pipe(
  ofType(GET_MAX_SOL),
  switchMap(action => {
      const roverNames = action.payload.roverNames;
      console.log("Rover names", roverNames);
      return ajax.getJSON(manifestUrl.replace("{roverName}", roverNames[0].toLowerCase()))
      // forkJoin(
      //   roverNames.map(roverName =>
      //     ajax.getJSON(manifestUrl.replace("{roverName}", roverName.toLowerCase()))
      //   )
      // )
      .pipe(
        map(maxSols => {
          console.log("Res", maxSols);
          const maxSol = Math.max(...maxSols);
          return loadMaxSol({maxSol});
        }),
        catchError(err => {
          console.log("ERR FU", err);
          return of({});
        })
      );
    }
  )
);