import React from 'react';
import { CssBaseline } from '@material-ui/core';

import {Switch, Route} from 'react-router-dom';
// import PrivateAdminRoute from './PrivateAdmin';

import NotFound from '../components/NotFound';

import LayoutMain from '../components/common/layouts/LayoutMain';
import LayoutAdmin from '../components/common/layouts/LayoutAdmin';

import HomePage from '../components/HomePage';
import TopCatPage from '../components/TopCatPage';
import CategoryPage from '../components/CategoryPage';
import ProductPage from '../components/ProductPage';

import AdminLoginPage from '../components/AdminLoginPage';
import AdminPage from '../components/AdminPage';
import AdminCategories from '../components/AdminPage/AdminCategories';
import AdminCategoriesEditNew from '../components/AdminPage/AdminCategories/EditNew';
import AdminOptions from '../components/AdminPage/AdminOptions';
import AdminProducts from '../components/AdminPage/AdminProducts';
import AdminProductReview from '../components/AdminPage/AdminProducts/ProductReview';
import AdminProductsEditNew from '../components/AdminPage/AdminProducts/EditNew';


export const Router = () => (

    <React.Fragment>
        <CssBaseline />
        <div className="container-fluid">
            <Switch>
                <Route exact
                    path="/"
                    component={props => <LayoutMain {...props}><HomePage/></LayoutMain>}/>
                <Route exact
                    path="/top-categories/:topCat?"
                    component={props => <LayoutMain {...props}><TopCatPage/></LayoutMain>}/>
                <Route exact
                    path="/categories/:category?"
                    component={props => <LayoutMain {...props}><CategoryPage/></LayoutMain>}/>
                <Route exact
                    path="/products/:product?"
                    component={props => <LayoutMain {...props}><ProductPage/></LayoutMain>}/>

                <Route exact
                    path="/admin/login"
                    component={AdminLoginPage}/>
                <Route exact
                //<PrivateAdminRoute exact
                    path="/admin"
                    component={props => <LayoutAdmin {...props}><AdminPage/></LayoutAdmin>}/>
                <Route exact
                //<PrivateAdminRoute exact
                    path="/admin/categories"
                    component={props => <LayoutAdmin {...props}><AdminCategories/></LayoutAdmin>}/>
                <Route exact
                //<PrivateAdminRoute exact
                    path="/admin/categories/:categoryName?"
                    component={props => <LayoutAdmin {...props}><AdminCategoriesEditNew {...props}/></LayoutAdmin>}/>
                <Route exact
                //<PrivateAdminRoute exact
                    path="/admin/categories/top/:topCatName?"
                    component={props => <LayoutAdmin {...props}><AdminCategoriesEditNew {...props}/></LayoutAdmin>}/>
                <Route exact
                //<PrivateAdminRoute exact
                    path="/admin/options"
                    component={props => <LayoutAdmin {...props}><AdminOptions/></LayoutAdmin>}/>
                <Route exact
                //<PrivateAdminRoute exact
                    path="/admin/products"
                    component={props => <LayoutAdmin {...props}><AdminProducts/></LayoutAdmin>}/>
                <Route exact
                //<PrivateAdminRoute exact
                    path="/admin/products/:productName?"
                    component={props => <LayoutAdmin {...props}><AdminProductReview{...props}/></LayoutAdmin>}/>
                <Route exact
                //<PrivateAdminRoute exact
                    path="/admin/products/edit/:productName?"
                    component={props => <LayoutAdmin {...props}><AdminProductsEditNew/></LayoutAdmin>}/>

                <Route path="*" component={NotFound}/>
            </Switch>
        </div>
    </React.Fragment>
);

