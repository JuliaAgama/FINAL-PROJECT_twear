import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';

import cart from './cart';
import topCats from './topCats';
import topCatItem from './topCatItem';
import categories from './categories';
import categoryItem from './categoryItem';
import customers from './customer';
import header from './header';
import modal from './modal';
import genders from './genders';
import genderItem from './genderItem';
import colors from './colors';
import colorItem from './colorItem';
import sizeTypes from './sizeTypes';
import sizeTypeItem from './sizeTypeItem';
import sizes from './sizes';
import sizeItem from './sizeItem';
import products from './products';
import productItem from './productItem';
import archives from './archives';
import archiveItem from './archiveItem';
import productsGallery from './productsGallery';

export default combineReducers({
    cart,
    topCats,
    categories,
    customers,
    header,
    modal,
    topCatItem,
    categoryItem,
    genders,
    genderItem,
    colors,
    colorItem,
    sizeTypes,
    sizeTypeItem,
    sizes,
    sizeItem,
    products,
    productItem,
    archives,
    archiveItem,
    productsGallery,
    form: reduxFormReducer
});
