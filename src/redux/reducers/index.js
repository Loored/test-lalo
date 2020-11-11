import { combineReducers } from 'redux';
import emailActions from './emailActions';
import visibilityFilter from './visibilityFilter';

const emailApp = combineReducers({
  emailActions,
  visibilityFilter
});

export default emailApp;