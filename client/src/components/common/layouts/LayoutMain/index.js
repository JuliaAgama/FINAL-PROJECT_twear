import React from 'react';
import SearchBox from '../../SearchBox';

const LayoutMain = (props) => {

    return (
        <>
        <div className="wrapper pt-5">
            <SearchBox/>
            <div className="main-content mt-3">{props.children}</div>
        </div>
        </>
    );
}

export default LayoutMain;
