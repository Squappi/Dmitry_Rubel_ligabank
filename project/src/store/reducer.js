import {createReducer} from '@reduxjs/toolkit';
import { ActionType } from '../const';

const initialState = {
  converterLoad: [],
};

const converter = createReducer(initialState, (builder) => {
  builder
    .addCase(ActionType.LOAD_API, (state, action) => {
      state.converterLoad = action.payload;
    });
});

export {converter};