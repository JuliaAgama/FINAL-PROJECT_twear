import { combineReducers } from 'redux';

import topCats from './topCats';
import topCatItem from './topCatItem';
import categories from './categories';
import categoryItem from './categoryItem';
import genders from './genders';
import genderItem from './genderItem';

export default combineReducers({
    topCats,
    topCatItem,
    categories,
    categoryItem,
    genders,
    genderItem
});
