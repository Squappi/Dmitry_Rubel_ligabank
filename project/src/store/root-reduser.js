import { combineReducers } from "redux";
import { converter } from "./reducer";

const NameSpace = {
  LOAD: 'LOAD',
};

export default combineReducers({
  [NameSpace.LOAD]: converter,
});