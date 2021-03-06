import React from "react";
import { CssBaseline } from "@material-ui/core";

import { Switch, Route } from "react-router-dom";

import NotFound from "../components/NotFound";

import LayoutMain from "../components/common/layouts/LayoutMain";
import LayoutAdmin from "../components/common/layouts/LayoutAdmin";
import LayoutCheckout from "../components/common/layouts/LayoutCheckout";

import HomePage from "../components/HomePage";
import TopCatPage from "../components/TopCatPage";
import CategoryPage from "../components/CategoryPage";
import ProductPage from "../components/ProductPage";
import CartPage from "../components/CartPage";
import PaymentPage from "../components/PaymentPage";

import PersonalCabinet from "../components/PersonalCabinet";

import AdminPage from "../components/AdminPage";
import AdminCategories from "../components/AdminPage/AdminCategories";
import AdminCategoriesEditNew from "../components/AdminPage/AdminCategories/EditNew";
import AdminOptions from "../components/AdminPage/AdminOptions";
import AdminProducts from "../components/AdminPage/AdminProducts";
import AdminProductReview from "../components/AdminPage/AdminProducts/ProductReview";
import AdminProductsEditNew from "../components/AdminPage/AdminProducts/EditNew";
import AdminProductsEditNewColors from "../components/AdminPage/AdminProducts/EditNewColors";
import AdminSettings from "../components/AdminPage/AdminSettings";
import AdminSelectedProducts from "../components/AdminPage/AdminSettings/SelectedProducts";
import SearchResultPage from "../components/SearchResultPage";

import PrivateRoute from "./PrivateRoute";
import CustomerRoute from "./CustomerRoute";
import AccessDenied from "../components/AccessDenied";


export const Router = () => (

    <React.Fragment>
        <CssBaseline />
        <Switch>
            <Route exact path="/"
                component={props => <LayoutMain {...props}><HomePage/></LayoutMain>}
            />
            <Route exact path="/top-category/:name?"
                component={props => <LayoutMain {...props}><TopCatPage/></LayoutMain>}
            />
            <Route exact path="/categories/:category?"
                component={props => <LayoutMain {...props}><CategoryPage/></LayoutMain>}
            />
            <Route exact path="/products/:product?"
                component={props => <LayoutMain {...props}><ProductPage {...props}/></LayoutMain>}
            />
            <Route exact path="/cart"
                component={props => <LayoutMain {...props}><CartPage {...props}/></LayoutMain>}
            />
            <Route exact path="/checkout/"
                component={props => <LayoutCheckout {...props}></LayoutCheckout>}
            />
            <Route exact path="/payment/"
                component={props => <PaymentPage {...props}/>}
            />
            <Route exact path="/search/:searchQuery?"
                   component={props => <LayoutMain {...props}><SearchResultPage {...props}/></LayoutMain>}
            />

            <Route exact path="/accessDenied" component={AccessDenied} />

            <CustomerRoute exact path="/personalCabinet"
                component={props => <LayoutMain {...props}><PersonalCabinet/></LayoutMain>}
            />

            <PrivateRoute exact path="/admin"
                component={props => ( <LayoutAdmin {...props}> <AdminPage /> </LayoutAdmin> )}
            />
            <PrivateRoute exact path="/admin/categories"
                component={props => ( <LayoutAdmin {...props}> <AdminCategories /> </LayoutAdmin> )}
            />
            <PrivateRoute exact path="/admin/categories/:categoryName?"
                component={props => ( <LayoutAdmin {...props}> <AdminCategoriesEditNew {...props} /> </LayoutAdmin>)}
            />
            <PrivateRoute exact path="/admin/categories/top/:topCatName?"
                component={props => ( <LayoutAdmin {...props}> <AdminCategoriesEditNew {...props} /> </LayoutAdmin>)}
            />
            <PrivateRoute exact path="/admin/options"
                component={props => ( <LayoutAdmin {...props}> <AdminOptions /> </LayoutAdmin> )}
            />
            <PrivateRoute exact path="/admin/products"
                component={props => ( <LayoutAdmin {...props}> <AdminProducts /> </LayoutAdmin> )}
            />
            <PrivateRoute exact path="/admin/products/:itemNo?"
                component={props => ( <LayoutAdmin {...props}> <AdminProductReview {...props} /> </LayoutAdmin> )}
            />
            <PrivateRoute exact path="/admin/products/edit/:itemNo?"
                component={props => ( <LayoutAdmin {...props}> <AdminProductsEditNew {...props} /> </LayoutAdmin> )}
            />
            <PrivateRoute exact path="/admin/products/edit/colors/:itemNo?"
                component={props => ( <LayoutAdmin {...props}> <AdminProductsEditNewColors {...props} /> </LayoutAdmin> )}
            />
            <PrivateRoute exact path="/admin/settings"
                component={props => ( <LayoutAdmin {...props}> <AdminSettings {...props}/> </LayoutAdmin> )}
            />
            <PrivateRoute exact path="/admin/selectedProducts"
                component={props => ( <LayoutAdmin {...props}> <AdminSelectedProducts {...props}/> </LayoutAdmin> )}
            />
            <Route path="*" component={NotFound} />
        </Switch>
    </React.Fragment>
);
