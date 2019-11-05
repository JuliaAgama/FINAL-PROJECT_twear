import React from 'react';
import Menu from './Menu';

export default props => {

    const nav = [
        {id: '1', title: 'Home', url: '/', active: false},
        {id: '3', title: 'Cart', url: '/cart', active: false},
        {id: '4', title: 'Admin', url: '/admin', active: false}
    ];

    return (
        <div>
            <button className="navbar-toggler headernav-button" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarResponsive">

                <Menu items={nav} cart={props.cart}/>
            </div>
        </div>
    )
};
