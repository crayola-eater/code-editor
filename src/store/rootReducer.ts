import { combineReducers } from 'redux';
import darkModeReducer from './reducers/darkmode/reducer';
import filesReducer from './reducers/files/reducer';

const rootReducer = combineReducers({
  darkMode: darkModeReducer,
  files: filesReducer,
});

export default rootReducer;
