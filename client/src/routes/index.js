import React from 'react';
import { CssBaseline } from '@material-ui/core';

import {Switch, Route} from 'react-router-dom';

import HeaderV3 from '../components/HeaderV3';
import NotFound from '../components/NotFound';
import LayoutAdmin from '../components/common/layouts/LayoutAdmin';

import AdminLoginPage from '../components/AdminLoginPage';
import AdminPage from '../components/AdminPage';
import AdminCategories from '../components/AdminPage/AdminCategories';
import EditNewCategory from '../components/AdminPage/AdminCategories/EditNewCategory';

export const Router = () => (

    <React.Fragment>
        <CssBaseline />
        <div className="container-fluid">
            <Switch>
                <Route exact
                       path="/"
                       component={HeaderV3}/>

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

                <Route path="*" component={NotFound}/>
            </Switch>
        </div>
    </React.Fragment>
);

