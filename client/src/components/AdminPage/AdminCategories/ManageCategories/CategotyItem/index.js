import React from 'react';
import {Link} from "react-router-dom";

export default props => {

    const {item} = props;

    const onDelete = () => {
        console.log('BETTER NOT DELETE CATEGORY!!!!')
    };

    return (
        <>
            <li className="list-group-item list-group-item-info">
                <div className="row justify-between align-center">
                    <div className="col-3">
                        <img
                            width={50}
                            height={50}
                            src={item.img}
                            alt="NOT FOUND"
                        />
                        <span> {item.title} </span>
                    </div>
                    <div className="col-5">
                        <span>Top Category: {item.topCatId}</span>
                    </div>
                    <div className="col-2">
                        <Link to={`/admin/categories/${item.title}`}>
                            <button className="btn btn-sm btn-primary">
                                <i className="fas fa-pencil-alt"></i>
                            </button> Edit
                        </Link>
                    </div>
                    <div className="col-2">
                        <button
                            className="btn btn-sm btn-danger"
                            onClick={() => onDelete()}
                        >
                            <i className="fa fa-trash"></i>
                        </button> Delete
                    </div>
                </div>
            </li>
        </>
    )
};
