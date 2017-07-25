import { combineReducers } from 'redux';

import { reducer as todos } from 'example-api-connector';
import visibilityFilter from './visibility-reducer';

export default combineReducers({
    todos,
    visibilityFilter,
});