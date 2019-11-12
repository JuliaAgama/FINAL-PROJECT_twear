import { combineReducers } from 'redux';

import topCats from './topCats';
import categories from './categories';
import genders from './genders';
// import reducer2 from './reducer2';

export default combineReducers({
    topCats,
    categories,
    genders
    // reducer2
});
