import App from "./components/App.jsx";
import ReactDOM from 'react-dom';
import React from "react";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReduser from "./store/root-reduser.js";
import { getLoadConvers } from "./store/api-actions.js";

if(!localStorage.getItem('history')) {
  localStorage.setItem('history', JSON.stringify([]));
}
const store = createStore(rootReduser, composeWithDevTools(applyMiddleware(thunk)));

store.dispatch(getLoadConvers());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
