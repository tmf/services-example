import * as actions from './actions';
import reducer from './reducer';
import saga from './saga';
import state from './state';

export default {
    ...actions,
    reducer,
    saga,
    state,
};
