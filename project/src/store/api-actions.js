import { loadConverterApi, loadConverterHistory } from "./actions";


const URL = `http://data.fixer.io/api/latest?access_key=38f94aef9d1808fc956cac0e051d2edf&symbols=USD,EUR,RUB,GBP,CNY`;

export function getLoadConvers() {
  return function(dispatch) {
    return fetch(URL)
      .then(res => res.json())
      .then(data => dispatch(loadConverterApi(data)))
  }
}

export function getLoadHistory(date) {
  return function (dispatch) {
    return fetch(`http://data.fixer.io/api/${date}?access_key=38f94aef9d1808fc956cac0e051d2edf&symbols=USD,EUR,RUB,GBP,CNY`)
      .then(res => res.json())
      .then(data => dispatch(loadConverterHistory(data)))
  }
}

