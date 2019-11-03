import React from 'react';
import {Link} from "react-router-dom";

const Header = (props) => {

    return (
        <>
            <header>
                <div className="container-fluid">
                    <div className="row">
                        <Link to={`/`} className="col-2">
                            <div>logo</div>
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
