import { ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { forkJoin, of, Observable } from 'rxjs';
import { map, switchMap, catchError, withLatestFrom, takeUntil, exhaustMap } from 'rxjs/operators';

import { SUBMIT_FORM, RESET_FORM } from '../../action-types';
import { loadMaxSol } from '../../actions';

const photosUrl = 'https://api.nasa.gov/mars-photos/api/v1/rovers/{rover}/photos?sol={sol}&camera={camera}&api_key=DEMO_KEY';

export const submitFormEpic = (action$, state$) => action$.pipe(
  ofType(SUBMIT_FORM),
  withLatestFrom(state$),
  switchMap(() => 
      Observable.interval(5000).pipe(
        takeUntil(action$.pipe(ofType(RESET_FORM))),
        withLatestFrom(state$),
        exhaustMap(state => {
          const selectedRoversIds = state.rovers.selectedIds;
          const selectedCamIds = state.camas.selectedIds;
          return forkJoin(

          ).pipe(
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
    )
  )
);
