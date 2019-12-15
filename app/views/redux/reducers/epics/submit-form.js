import { ofType } from 'redux-observable';
import { of, forkJoin } from 'rxjs';
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
    Observable.timer(0, 60000).pipe(
      takeUntil(action$.pipe(ofType(RESET_PICS))),
      withLatestFrom(state$),
      exhaustMap(([_, state]) => {
        let apiArgs = {};
        const selectedRovers = state.rovers.selected;
        const selectedCamIds = state.cams.selectedIds;
        const maxSol = state.metadata.maxSol;
        selectedRovers.forEach(rover => {
            apiArgs[rover] = {
              cam: selectedCamIds[Math.floor(Math.random() * selectedRovers.length)],
              sol: Math.floor(Math.random() * (maxSol - 0 + 1) + 0).toString()
            };
          });
        return forkJoin(
          Object.keys(apiArgs).map(roverName => {
            const camAndSol = apiArgs[roverName];
            return ajax.getJSON(photosUrl.replace('{rover}', roverName).replace('{sol}', camAndSol.sol).replace('{camera}', camAndSol.cam));
          })
        ).pipe(
          mergeMap(responses => {
            let photos = responses.map(response => response.photos);
            photos = photos.flat();
            const photoUrls = [];
            photos.forEach(photo => photoUrls.push(photo.img_src));
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
