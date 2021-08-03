import {createAction} from '@reduxjs/toolkit';
import { ActionType } from '../const';

export const loadConverterApi = createAction(ActionType.LOAD_API, (data) => ({
  payload: data,
}));

export const loadConverterHistory = createAction(ActionType.LOAD_HISTORY, (data) => ({
  payload: data,
}));