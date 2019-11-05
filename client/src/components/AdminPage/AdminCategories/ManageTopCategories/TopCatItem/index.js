import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";

import ManageCategories from '../../ManageCategories';

export default props => {

    const {item} = props;

    let [className, setClassName] = useState('d-none');

    const toggleCategories =() => {
        className === 'd-none' ? setClassName('d-block') : setClassName('d-none');
    };

    const onDelete = () => {
        console.log('BETTER NOT DELETE TOP CATEGORY!!!!')
    };


    return (
        <>
            <li className="list-group-item">
                <div className="row justify-between align-center">
                    <div className="col-6">
                        <img
                            width={50}
                            height={50}
                            src={item.img}
                            alt="NOT FOUND"
                        />
                        <span> {item.title} </span>
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
                    <div className="col-2">
                        <button
                            className="btn btn-sm btn-info"
                            onClick={() => toggleCategories()}
                        >
                            <i className="fas fa-angle-double-right text-white"></i>
                        </button> Dive into
                    </div>
                </div>
            </li>

            <div className={className}>
                <div className="bg-info ml-5">
                    <ManageCategories topCategoryId={item._id}/>
                    <button
                        className="btn btn-block btn-secondary text-uppercase"
                        onClick={()=> toggleCategories()}
                    >
                        Close
                    </button>
                </div>
            </div>
        </>
    )
};
