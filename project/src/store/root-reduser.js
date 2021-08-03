import { combineReducers } from "redux";
import { converter } from "./reducer";

export const NameSpace = {
  LOAD: 'LOAD',
};

export default combineReducers({
  [NameSpace.LOAD]: converter,
});