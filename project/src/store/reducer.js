import {createReducer} from '@reduxjs/toolkit';
import { loadConverterApi, loadConverterHistory } from './actions';


const initialState = {
  converterLoad: [],
  converterHistory: [],
};

const converter = createReducer(initialState, (builder) => {
  builder
    .addCase(loadConverterApi, (state, action) => {
      state.converterLoad = action.payload;
    })
    .addCase(loadConverterHistory, (state, action) => {
      state.converterHistory = action.payload;
    });
});

export {converter};