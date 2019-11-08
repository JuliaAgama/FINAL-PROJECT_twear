import React from 'react';
import SearchBox from '../../SearchBox';
import Header from '../../../Header';
import Footer from '../../../Footer';

export default props => {

    return (
        <>
        <Header/>
        <div className="wrapper pt-5">
            <SearchBox/>
            <div className="main-content mt-3">{props.children}</div>
        </div>
        <Footer/>>
        </>
    );
};
