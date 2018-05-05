import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

const allReducers = {
  form: formReducer,
};

export default combineReducers(allReducers);
