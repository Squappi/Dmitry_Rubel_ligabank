import { loadConverterApi, loadConverterHistory } from "./actions";


const url = `http://data.fixer.io/api/latest?access_key=19d3e0eabb62f4d9fc124cd5622908aa&symbols=USD,EUR,RUB,GBP,CNY`;

export function getLoadConvers() {
  return function(dispatch) {
    return fetch(url)
      .then(res => res.json())
      .then(data => dispatch(loadConverterApi(data)))
  }
}

export function getLoadHistory(date) {
  return function (dispatch) {
    return fetch(`http://data.fixer.io/api/${date}?access_key=19d3e0eabb62f4d9fc124cd5622908aa&symbols=USD,EUR,RUB,GBP,CNY`)
      .then(res => res.json())
      .then(data => dispatch(loadConverterHistory(data)))
  }
}

