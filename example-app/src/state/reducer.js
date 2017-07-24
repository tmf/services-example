import { combineReducers } from 'redux';

import { reducer as todos } from '../lib/api-connector';
import visibilityFilter from './visibility-reducer';

export default combineReducers({
    todos,
    visibilityFilter,
});