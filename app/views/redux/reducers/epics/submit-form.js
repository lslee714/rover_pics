import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { Observable } from 'rxjs/Rx';
import { map, switchMap, catchError, withLatestFrom, takeUntil, exhaustMap } from 'rxjs/operators';

import { SUBMIT_FORM, RESET_PICS } from '../../action-types';
import {  resetForm, setPics } from '../../actions';

const photosUrl = 'https://api.nasa.gov/mars-photos/api/v1/rovers/{rover}/photos?sol={sol}&camera={camera}&api_key=qIo7wzqaERMLk74ecs0caFIqFoFMCVgCMrWym7KA';

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
          const aRoverName = selectedRovers[Math.floor(Math.random()*selectedRovers.length)];
          const aCamId = selectedCamIds[Math.floor(Math.random()*selectedRovers.length)];
          const randomSol = Math.floor(Math.random() * (maxSol - 0 + 1) + 0);
          return ajax.getJSON(
            photosUrl.replace('{rover}', aRoverName).replace('{sol}', randomSol.toString()).replace('{camera}', aCamId)
          ).pipe(
            map(response => {
              const photos = response.photos;
              const photoUrls = photos.map(photo => photo.img_src);
              return setPics({urls: photoUrls});
            }),
            catchError(err => {
              console.log("ERR", err);
              return of(resetForm);
            })
          );
        }
      )
    )
  )
);
