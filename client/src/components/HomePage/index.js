import React from 'react';
import {Link} from "react-router-dom";

const HomePage = () => {

    return (
        <>
            <section className="home-page">
                <div className="row">
                    <Link to={`/women`} className ="col p-5 border border-secondary text-center">
                        <div >For Her</div>
                    </Link>
                    <Link to={`/all`} className ="col p-5 border border-secondary text-center">
                        <div>ALL</div>
                    </Link>
                    <Link to={`/men`} className ="col p-5 border border-secondary text-center">
                        <div>For Him</div>
                    </Link>
                </div>
            </section>
        </>
    )
}

export default HomePage;
