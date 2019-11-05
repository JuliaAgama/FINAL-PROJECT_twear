import React from 'react';
import {Link} from "react-router-dom";

import ManageTopCategories from './ManageTopCategories';

export default props => {

    return (
        <>
        <div className="mb-5">
            <ManageTopCategories/>
        </div>
        <Link to={`/admin`}>
            <button
                className="btn btn-lg btn-block btn-secondary text-uppercase">Back
            </button>
        </Link>
        <div className="my-5 row justify-around">
            <Link to='/admin/products' className="col-4 mx-5 text-center">
                <button className="btn btn-lg btn-outline-secondary">
                    Manage Products
                </button>
            </Link>
            <Link to='/admin/options' className="col-4 mx-5 text-center">
                <button className="btn btn-lg btn-outline-secondary">
                    Manage Options
                </button>
            </Link>

        </div>
        </>
    )
};
