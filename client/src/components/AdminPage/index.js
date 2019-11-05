import React from 'react';
import AdminSideBar from './AdminSideBar';

export default (props) => {

    return(
        <div className="row">
            <div className="col-lg-5">
                <AdminSideBar/>
            </div>
            <div className="col-lg-7"></div>
            {/* <div className="col-lg-9">{props.children}</div> */}
        </div>
    )
};
