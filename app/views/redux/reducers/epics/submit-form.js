import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { Observable } from 'rxjs/Rx';
import { switchMap, catchError, withLatestFrom, takeUntil, exhaustMap, mergeMap } from 'rxjs/operators';

import { SUBMIT_FORM, RESET_PICS } from '../../action-types';
import { resetPics, setPics, submitForm } from '../../actions';

const photosUrl = 'https://api.nasa.gov/mars-photos/api/v1/rovers/{rover}/photos?sol={sol}&camera={camera}&api_key=qIo7wzqaERMLk74ecs0caFIqFoFMCVgCMrWym7KA';


let retries = 0;
export const submitFormEpic = (action$, state$) => action$.pipe(
  ofType(SUBMIT_FORM),
  switchMap(() =>
    Observable.timer(0, 300000).pipe(
      takeUntil(action$.pipe(ofType(RESET_PICS))),
      withLatestFrom(state$),
      exhaustMap(([_, state]) => {
        const selectedRovers = state.rovers.selected;
        const selectedCamIds = state.cams.selectedIds;
        const maxSol = state.metadata.maxSol;
        const aRoverName = selectedRovers[Math.floor(Math.random() * selectedRovers.length)];
        const aCamId = selectedCamIds[Math.floor(Math.random() * selectedRovers.length)];
        const randomSol = Math.floor(Math.random() * (maxSol - 0 + 1) + 0);
        return ajax.getJSON(
          photosUrl.replace('{rover}', aRoverName).replace('{sol}', randomSol.toString()).replace('{camera}', aCamId)
        ).pipe(
          mergeMap(response => {
            const photos = response.photos;
            const photoUrls = photos.map(photo => photo.img_src);
            if (photoUrls.length) {
              retries = 0;
              return of(setPics({ urls: photoUrls }));
            }
            else {
              const actions = [resetPics()];
              if (retries < 10) {
                actions.push(submitForm());
                retries++;
              }
              return of(...actions);
            }
          }),
          catchError(() => {
            return of(resetPics());
          })
        );
      }
      )
    )
  )
);
