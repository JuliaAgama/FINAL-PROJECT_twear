import React from 'react';
import { CssBaseline } from '@material-ui/core';

import {Switch, Route} from 'react-router-dom';
import PrivateAdminRoute from './PrivateAdmin';

import Header from '../components/Header';
import Footer from '../components/Footer';
import NotFound from '../components/NotFound';

import LayoutMain from '../components/common/layouts/LayoutMain';
import LayoutAdmin from '../components/common/layouts/LayoutAdmin';

import HomePage from '../components/HomePage';
import CatGalleryPage from '../components/CatGalleryPage';

import AdminLoginPage from '../components/AdminLoginPage';
import AdminPage from '../components/AdminPage';
import AdminCategories from '../components/AdminPage/AdminCategories';
import EditNewCategory from '../components/AdminPage/AdminCategories/EditNew';


const categoriesTree = [
    {   gender: 'women',
        categories: [
            {   _id: 11,
                category: 'clothes',
                subcategories: ['t-shirts & sweatshirts', 'dresses & skirts', 'tops & shirts', 'jackets', 'outwear & coats']},
            {   _id: 21,
                category: 'shoes',
                subcategories: ['speed', 'track', 'pumps', 'booties', 'sneakers' ]},
            {   _id: 31,
                category: 'bags'},
            {   _id: 41,
                category: 'hats'},
            {   _id: 51,
                category: 'accessories',
                subcategories: ['wallets', 'silk & scarves', 'other accessories']}
        ]},
    {   gender: 'men',
        categories: [
            {   _id: 12,
                category: 'clothes',
                subcategories: ['t-shirts & polos', 'sweatshirts', 'shirts', 'jackets', 'trousers']},
            {   _id: 22,
                category: 'shoes',
                subcategories: ['speed', 'track', 'derbies', 'loafers', 'sneakers']},
            {   _id: 32,
                category: 'bags',},
            {   _id: 42,
                category: 'hats'},
            {   _id: 52,
                category: 'accessories',
                subcategories: [ 'wallets', 'scarves', 'leather bracelets', 'other accessories']}
        ]},
    {   gender: 'all',
        categories: [
            {   _id: 10, category: 'clothes'},
            {   _id: 20, category: 'shoes'},
            {   _id: 30, category: 'bags',},
            {   _id: 40, category: 'hats'},
            {   _id: 50, category: 'accessories'}
        ]},
];


export const Router = () => (

    <React.Fragment>
        <CssBaseline />
        <div className="container-fluid">
            <Switch>
                <Route exact
                    path="/"
                    component={props => <LayoutMain {...props}><HomePage/></LayoutMain>}/>
                <Route exact
                    path="/gender/:gender?"
                    component={props => <LayoutMain {...props}><CatGalleryPage categoriesTree={categoriesTree}/></LayoutMain>}/>


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
                    component={props => <LayoutAdmin {...props}><EditNewCategory {...props}/></LayoutAdmin>}/>
                <Route exact
                //<PrivateAdminRoute exact
                    path="/admin/categories/top/:topCatName?"
                    component={props => <LayoutAdmin {...props}><EditNewCategory {...props}/></LayoutAdmin>}/>

                <Route path="*" component={NotFound}/>
            </Switch>
        </div>
    </React.Fragment>
);

