import React from 'react';
import SearchBox from '../../SearchBox';
import Header from '../../../Header';
import Footer from '../../../Footer';
import SettingsButton from '../../../common/buttons/Settings';

export default props => {

    const redirectToAdmin = () => {
        window.location.assign(`/admin/login`);
    }

    return (
        <>
            <Header/>
            <div className="wrapper pt-5">
                <SearchBox/>
                <div className="main-content mt-3">{props.children}</div>
            </div>
            <Footer/>
            <SettingsButton title='Admin Page' size={2} color='red' onClick={redirectToAdmin}/>
        </>
    );
};
