import { combineReducers } from 'redux';

import topCats from './topCats';
import categories from './categories';
// import reducer2 from './reducer2';

export default combineReducers({
    topCats,
    categories
    // reducer2
});
