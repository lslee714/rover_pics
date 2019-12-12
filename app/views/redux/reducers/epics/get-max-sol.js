import { ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { forkJoin, of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';

import { GET_MAX_SOL } from '../../action-types';
import { loadMaxSol } from '../../actions';

const manifestUrl = 'https://api.nasa.gov/mars-photos/api/v1/manifests/{roverName}?api_key=qIo7wzqaERMLk74ecs0caFIqFoFMCVgCMrWym7KA';

export const getMaxSolEpic = action$ => action$.pipe(
  ofType(GET_MAX_SOL),
  switchMap(action => {
      const roverNames = action.payload.roverNames;
      return forkJoin(
        roverNames.map(roverName =>
          ajax.getJSON(manifestUrl.replace("{roverName}", roverName.toLowerCase()))
        )
      )
      .pipe(
        map(responses => {
          const maxSols = responses.map(res => res.photo_manifest.max_sol);
          const maxSol = Math.max(...maxSols);
          return loadMaxSol({maxSol: maxSol});
        }),
        catchError(err => {
          console.log("ERR", err);
          return of({});
        })
      );
    }
  )
);