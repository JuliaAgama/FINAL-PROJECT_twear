// import * as PRODUCTS from "../constants/products";
// import ProductAPI from "../../services/ProductApi";

// export function getProductsByCategory(id) {
//     return function (dispatch) {
//         dispatch({
//             type: PRODUCTS.PRODUCT_REQUEST_SENT
//         });
//         (new ProductAPI()).getProductsByCategories(id).then(res => {
//             console.log(res);
//             return dispatch({
//                 type: PRODUCTS.FETCH_PRODUCTS_BY_CATEGORY,
//                 data: res
//             });
//         });
//     };
// };

// export function getProductById(id) {
//     return function (dispatch) {
//         dispatch({
//             type: PRODUCTS.PRODUCT_REQUEST_SENT
//         });
//         (new ProductAPI()).getProductById(id).then(res => {
//             return dispatch({
//                 type: PRODUCTS.FETCH_PRODUCT_BY_ID,
//                 data: res.data
//             });
//         });
//     };
// };
