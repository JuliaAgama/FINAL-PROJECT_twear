import { combineReducers } from 'redux';

import topCats from './topCats';
import categories from './categories';
import customers from './customer';
import categoriesMenu from './categoriesMenu';
import search from './search';
// import reducer2 from './reducer2';

export default combineReducers({
    topCats,
    categories,
    customers,
    categoriesMenu,
    search
    // reducer2
});
