import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import { persistReducer, createMigrate } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import cart from './cart';
import orders from './orders';
import orderItem from './orderItem';
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
import currency from './currency';

const migrations = {
    0: (state) => {
        return {
            ...state,
            cart: {
                ...state.cart,
            },
            orderItem: {
                ...state.orderItem,
            },
            loaded: {
                ...state.loaded,
            },
            error: {
                ...state.error,
            },
        }
    }
};

const persistConfig = {
    key: 'cart',
    version: 0, //New version 0, default or previous version -1
    storage,
    whitelist: ['cart', 'orderItem', 'productsGallery'],
    // stateReconciler: autoMergeLevel2
    stateReconciler: autoMergeLevel2,
    migrate: createMigrate(migrations, { debug: true }),
};

const rootReducer = combineReducers({
    cart,
    orders,
    orderItem,
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
    currency,
    form: reduxFormReducer
});

export default persistReducer(persistConfig, rootReducer);
