import { combineReducers } from 'redux';
import emailActions from './emailActions';

const emailApp = combineReducers({
  emailActions,
});

export default emailApp;