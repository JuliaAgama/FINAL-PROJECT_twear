import React from 'react';
import SearchBox from '../../SearchBox';

const LayoutMain = (props) => {

    return (
        <>
            <SearchBox/>
            <div className="main-content">{props.children}</div>
        </>
    );
}

export default LayoutMain;
