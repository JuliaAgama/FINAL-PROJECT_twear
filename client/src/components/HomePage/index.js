import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import GendersApi from '../../services/Genders';
import HeaderMaterialUI from '../HeaderMaterialUI';

const HomePage = () => {

/// to check that server requests work:
    useEffect(()=> {
        (new GendersApi())
        .getGenders()
        .then(res => {console.log(res)})
    },[]);

    return (
        <>
            <section className="home-page">
                <div className="row">
                    <Link to={`/gender/women`} className ="col p-5 border border-secondary text-center">
                        <div >For Her</div>
                    </Link>
                    <Link to={`/gender/all`} className ="col p-5 border border-secondary text-center">
                        <div>ALL</div>
                    </Link>
                    <Link to={`/gender/men`} className ="col p-5 border border-secondary text-center">
                        <div>For Him</div>
                    </Link>
                </div>
                <HeaderMaterialUI/>
            </section>
        </>
    )
}

export default HomePage;
