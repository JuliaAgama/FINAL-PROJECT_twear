import React from 'react';
import {Link} from "react-router-dom";

import HeaderNav from './HeaderNav';

const Header = () => {

    const styles = {
        navbarLogo: {
            width: '7rem',
            margin: '1rem'
        }
    }

    return (
        <>
            <header>
                <div className="container-fluid">
                    <div className="row navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                        <Link to={`/`} className="col-2">
                            <div style={styles.navbarLogo}>
                                <img className="img-fluid" src="/img/twear_logo_white-on-transparent.png" alt="NOT FOUND"/>
                            </div>
                        </Link>
                        <div className="col-10 text-center">
                            <HeaderNav/>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;
