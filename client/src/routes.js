import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import NotFound from './components/NotFound';

import Layout from './components/common/layouts/LayoutMain';
import HomePage from './components/HomePage';
import CatGalleryPage from './components/CatGalleryPage';
import AdminPage from './components/AdminPage';
import AdminCategories from './components/AdminPage/AdminCategories';
import EditNewCategory from './components/AdminPage/AdminCategories/EditNewCategory';


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
        <div className="container-fluid">
            <Header/>
            <main className='content'>
                <Switch>
                    <Route exact
                        path="/"
                        component={props => <Layout {...props}><HomePage/></Layout>}/>
                    <Route exact
                        path="/gender/:gender?"
                        component={props => <Layout {...props}><CatGalleryPage categoriesTree={categoriesTree}/></Layout>}/>
                    <Route exact
                        path="/admin"
                        component={props => <Layout {...props}><AdminPage/></Layout>}/>
                    <Route exact
                        path="/admin/categories"
                        component={props => <Layout {...props}><AdminCategories/></Layout>}/>
                    <Route exact
                        path="/admin/categories/:categoryName?"
                        component={props => <Layout {...props}><EditNewCategory {...props}/></Layout>}/>

                    <Route path="*" component={NotFound}/>
                </Switch>
            </main>
            <Footer/>
        </div>
    </React.Fragment>
);

