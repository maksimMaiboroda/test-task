import { combineReducers } from "redux";
import jokesReducer from "./jokesReducer";

import { reducer as formReducer } from 'redux-form'

export default combineReducers({
  jokes: jokesReducer,
  form: formReducer
});
