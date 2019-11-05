import React from 'react';
import {Link} from "react-router-dom";

import TopCatItem from './TopCatItem';


export default props => {

    const items = [
        {
            _id: "5dc075c91c9d4400005a4e9b",
            title: "footwear",
            img: "https://pmcfootwearnews.files.wordpress.com/2018/03/heels.jpg?w=700&h=437&crop=1"
        },
        {
            _id: "5dc075d81c9d4400005a4e9d",
            title: "clothes",
            img: "http://www.asiaone.com/sites/default/files/original_images/May2019/110419_clothes_pixabay.jpg"
        },
        {
            _id: "5dc0766c1c9d4400005a4ea1",
            title: "accessories",
            img: "https://www.brighton.com/photos/product/giant/369560S196912/-/size-os.jpg"
        },
    ];

    return (
        <div className="position-relative">
            <ul className="list-group m-3">
                {items
                        .map(item =>
                            <TopCatItem
                                item={item}
                                key={item._id}
                            />
                        )
                }
                <li className="list-group-item">
                    <div className="row">
                        <div className="col-3">
                            <Link to={`/admin`}>
                                <button className="btn btn-secondary text-uppercase">Back</button>
                            </Link>
                        </div>
                        <div className="col-9">
                        <Link to={`/admin/categories/newTopCategory`}>
                            <button className="btn btn-success text-uppercase">ADD MORE TOP CATEGORIES</button>
                        </Link>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
};
