import { ActionType } from "../const";
import { loadConverterApi } from "./actions"

const url = 'http://api.exchangeratesapi.io/v1';

function params(paramsObj) {
  return new URLSearchParams({
    access_key: '42332228bb31ee76e1e70f7ed803ecd3',
    ...paramsObj
  });
}

export function getLoadConvers(options) {
  return function(dispatch) {
    fetch(`${url}/latest?${params(options)}`)
      .then(res => res.json())
      .then(data => dispatch(loadConverterApi(data)))
  }
}