import React from 'react';
import {Link} from "react-router-dom";

// import '../../../node_modules/bootstrap/dist/css/bootstrap.css';

const bestProducts = [
    {   _id: '1-120', name: 'short top tile', categories: ['31']},
    {   _id: '2-10', name: 'high-heels shoes', categories: ['42']},
    {   _id: '2-40', name: 'party purse', categories: ['13']},
    {   _id: '1-20', name: 'great dress tile', categories: ['21']},
    {   _id: '2-30', name: 'fancy bootlets', categories: ['52']},
    {   _id: '1-50', name: 'sexy bra tile', categories: ['91']},
    {   _id: '1-60', name: 'black jeans tile', categories: ['81']},
    {   _id: '1-110', name: 'rainy  coat tile', categories: ['41']},
    {   _id: '1-30', name: 'xxl shirt tile', categories: ['71']}
];



export default () => {

    return (
        <>
            <div className="home-page">
                <section className="title-box text-center">
                        <h1> THIS IS HOME PAGE </h1>
                    <div className="row">
                        <div className="col-xs-12 col-md-6 col-lg-3 border border-secondary">
                            <Link to={`/top-categories/clothes`} className ="p-5  text-center d-block">Clothes women</Link>
                            <Link to={`/top-categories/clothes`} className ="p-5 text-center d-block">Clothes men</Link>
                        </div>
                        <div className="col-xs-12 col-md-6 col-lg-3 border border-secondary">
                            <Link to={`/top-categories/footwear`} className ="p-5 text-center d-block">Footwear women</Link>
                            <Link to={`/top-categories/footwear`} className ="p-5 text-center d-block">Footwear men</Link>
                        </div>
                        <div className="col-xs-12 col-md-6 col-lg-3 border border-secondary">
                            <Link to={`/top-categories/accessories`} className ="p-5 text-center d-block">Accessories women</Link>
                            <Link to={`/top-categories/accessories`} className ="p-5 text-center d-block">Accessories men</Link>
                        </div>
                        <div className="col-xs-12 col-md-6 col-lg-3 border border-secondary">
                            <Link to={`/top-categories/looks`} className ="p-5 text-center d-block">looks @twear women</Link>
                            <Link to={`/top-categories/looks`} className ="p-5 btext-center d-block">looks @twear men</Link>
                        </div>
                    </div>
                </section>

                <section className="best-gallery text-center my-5">
                        <h2> most popular products </h2>
                    <div className="row">
                        <div className="col-xs-12 col-md-6 col-lg-3 border border-secondary">
                            <Link to={`/products/${bestProducts[0].name}`} className ="p-5 text-center d-block">{`${bestProducts[0].name}`}</Link>
                        </div>
                        <div className="col-xs-12 col-md-6 col-lg-3 border border-secondary">
                            <Link to={`/products/${bestProducts[1].name}`} className ="p-5 text-center d-block">{`${bestProducts[1].name}`}</Link>
                        </div>
                        <div className="col-xs-12 col-md-6 col-lg-3 border border-secondary">
                            <Link to={`/products/${bestProducts[2].name}`} className ="p-5 text-center d-block">{`${bestProducts[2].name}`}</Link>
                        </div>
                        <div className="col-xs-12 col-md-6 col-lg-3 border border-secondary">
                            <Link to={`/products/${bestProducts[3].name}`} className ="p-5 text-center d-block">{`${bestProducts[3].name}`}</Link>
                        </div>
                    </div>
                    <h5 className="running-string my-4">... BUY BEST ... @TWEAR COLLECTIONS ...  HERE ONLY ... RIGHT NOW ...</h5>
                    <div className="row">
                        <div className="col-xs-12 col-md-6 col-lg-3 border border-secondary">
                            <Link to={`/products/${bestProducts[4].name}`} className ="p-5 text-center d-block">{`${bestProducts[4].name}`}</Link>
                        </div>
                        <div className="col-xs-12 col-md-6 col-lg-3 border border-secondary">
                            <Link to={`/products/${bestProducts[5].name}`} className ="p-5 text-center d-block">{`${bestProducts[5].name}`}</Link>
                        </div>
                        <div className="col-xs-12 col-md-6 col-lg-3 border border-secondary">
                            <Link to={`/products/${bestProducts[6].name}`} className ="p-5 text-center d-block">{`${bestProducts[6].name}`}</Link>
                        </div>
                        <div className="col-xs-12 col-md-6 col-lg-3 border border-secondary">
                            <Link to={`/products/${bestProducts[7].name}`} className ="p-5 text-center d-block">{`${bestProducts[7].name}`}</Link>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
};
