import React from 'react';
import { CssBaseline } from '@material-ui/core';

import {Switch, Route} from 'react-router-dom';

import NotFound from '../components/NotFound';

import LayoutMain from '../components/common/layouts/LayoutMain';
import LayoutAdmin from '../components/common/layouts/LayoutAdmin';

import HomePage from '../components/HomePage';
import TopCatPage from '../components/TopCatPage';
import CategoryPage from '../components/CategoryPage';
import ProductPage from '../components/ProductPage';

import AdminPage from '../components/AdminPage';
import AdminCategories from '../components/AdminPage/AdminCategories';
import AdminCategoriesEditNew from '../components/AdminPage/AdminCategories/EditNew';
import AdminOptions from '../components/AdminPage/AdminOptions';
import AdminProducts from '../components/AdminPage/AdminProducts';
import AdminProductReview from '../components/AdminPage/AdminProducts/ProductReview';
import AdminProductsEditNew from '../components/AdminPage/AdminProducts/EditNew';
import AdminProductsEditNewColors from '../components/AdminPage/AdminProducts/EditNewColors';
import PersonalCabinet from "../components/PersonalCabinet";
import PrivateAdminRoute from "./PrivateAdmin";
// import PrivateRoute from "./PrivateRoute";
import AccessDenied from "../components/AccessDenied";



export const Router = () => (

    <React.Fragment>
        <CssBaseline />
        <div className="container-fluid">
            <Switch>
                <Route exact
                    path="/"
                    component={props => <LayoutMain {...props}><HomePage/></LayoutMain>}/>
                <Route exact
                    path="/personalCabinet"
                    component={props => <LayoutMain {...props}><PersonalCabinet/></LayoutMain>}/>
                <Route exact
                    path="/top-categories/:topCat?"
                    component={props => <LayoutMain {...props}><TopCatPage{...props}/></LayoutMain>}/>
                <Route exact
                    path="/categories/:category?"
                    component={props => <LayoutMain {...props}><CategoryPage/></LayoutMain>}/>
                <Route exact
                    path="/products/:product?"
                    component={props => <LayoutMain {...props}><ProductPage{...props}/></LayoutMain>}/>

                <Route exact
                    path="/accessDenied"
                    component={AccessDenied}/>

                {/* <PrivateRoute exact */}
                <PrivateAdminRoute exact
                    path="/admin"
                    component={props => <LayoutAdmin {...props}><AdminPage/></LayoutAdmin>}/>
                {/* <PrivateRoute exact */}
                <PrivateAdminRoute exact
                    path="/admin/categories"
                    component={props => <LayoutAdmin {...props}><AdminCategories/></LayoutAdmin>}/>
                {/* <PrivateRoute exact */}
                <PrivateAdminRoute exact
                    path="/admin/categories/:categoryName?"
                    component={props => <LayoutAdmin {...props}><AdminCategoriesEditNew {...props}/></LayoutAdmin>}/>
                {/* <PrivateRoute exact */}
                <PrivateAdminRoute exact
                    path="/admin/categories/top/:topCatName?"
                    component={props => <LayoutAdmin {...props}><AdminCategoriesEditNew {...props}/></LayoutAdmin>}/>
                {/* <PrivateRoute exact */}
                <PrivateAdminRoute exact
                    path="/admin/options"
                    component={props => <LayoutAdmin {...props}><AdminOptions/></LayoutAdmin>}/>
                {/* <PrivateRoute exact */}
                <PrivateAdminRoute exact
                    path="/admin/products"
                    component={props => <LayoutAdmin {...props}><AdminProducts/></LayoutAdmin>}/>
                {/* <PrivateRoute exact */}
                <PrivateAdminRoute exact
                    path="/admin/products/:itemNo?"
                    component={props => <LayoutAdmin {...props}><AdminProductReview{...props}/></LayoutAdmin>}/>
                {/* <Route exact */}
                <PrivateAdminRoute exact
                    path="/admin/products/edit/:itemNo?"
                    component={props => <LayoutAdmin {...props}><AdminProductsEditNew{...props}/></LayoutAdmin>}/>
                {/* <Route exact */}
                <PrivateAdminRoute exact
                    path="/admin/products/edit/colors/:itemNo?"
                    component={props => <LayoutAdmin {...props}><AdminProductsEditNewColors{...props}/></LayoutAdmin>}/>

                <Route path="*" component={NotFound}/>
            </Switch>
        </div>
    </React.Fragment>
);
