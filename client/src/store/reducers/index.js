import { combineReducers } from 'redux';

import topCats from './topCats';
import topCatItem from './topCatItem';
import categories from './categories';
import categoryItem from './categoryItem';
import genders from './genders';
import genderItem from './genderItem';
import colors from './colors';
import colorItem from './colorItem';
import products from './products';
import productItem from './productItem';

export default combineReducers({
    topCats,
    topCatItem,
    categories,
    categoryItem,
    genders,
    genderItem,
    colors,
    colorItem,
    products,
    productItem
});
