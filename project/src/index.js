import App from "./components/App.jsx";
import ReactDOM from 'react-dom';
import React from "react";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReduser from "./store/root-reduser.js";

const store = createStore(rootReduser, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
