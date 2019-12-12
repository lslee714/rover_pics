import { combineEpics } from 'redux-observable';
import { combineReducers } from "redux";

import cams from "./cams";
import { getMaxSolEpic } from './epics/get-max-sol';
import { submitFormEpic } from './epics/submit-form';
import metadata from './metadata';
import rovers from "./rovers";
import pics from './pics';



export const rootEpic = combineEpics(
  getMaxSolEpic,
  submitFormEpic
);


export const combinedReducers = combineReducers({ rovers, cams, metadata, pics });
