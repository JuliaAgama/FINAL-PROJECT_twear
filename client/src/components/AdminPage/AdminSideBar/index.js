import React from 'react';
import {Link} from "react-router-dom";

export default () => {

    return(
        <ul className="list-group m-3">
            <li className="list-group-item">
                <Link to='/admin/categories'>Manage Categories</Link>
            </li>
            <li className="list-group-item">
                <Link to='/admin/products'>Manage Products</Link>
            </li>
            <li className="list-group-item">
                <Link to='/admin/options'>Manage Options sets (Colors, Sizes)</Link>
            </li>
        </ul>
    )
};
