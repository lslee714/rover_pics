import { combineEpics } from 'redux-observable';
import { combineReducers } from "redux";

import cams from "./cams";
import { getMaxSolEpic } from './epics/get-max-sol';
import metadata from './metadata';
import rovers from "./rovers";
import {  } from 'rxjs';



export const rootEpic = combineEpics(
  getMaxSolEpic,
);


export const combinedReducers = combineReducers({ rovers, cams, metadata });
