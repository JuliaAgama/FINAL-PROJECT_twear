import React from 'react';
import {Link} from "react-router-dom";

const Header = (props) => {

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
                    <div className="row">
                        <Link to={`/`} className="col-2">
                            <div style={styles.navbarLogo}>
                                <img className="img-fluid" src="/img/twear_logo_grey-on-transparent.png" alt="NOT FOUND"/>
                            </div>
                        </Link>
                        <div className="col-10 text-center">
                            <p>THIS IS HEADER</p>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;
