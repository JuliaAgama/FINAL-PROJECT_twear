import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (

    <div className="not-found">
        <img
            src="https://res.cloudinary.com/teepublic/image/private/s--5z0FprQP--/t_Preview/b_rgb:ffffff,c_limit,f_jpg,h_630,q_90,w_630/v1513290234/production/designs/2179068_1.jpg"
            style={{
                width: 400,
                height: 400,
                display: 'block',
                margin: 'auto',
                position: 'relative'
            }}
            alt="NOT FOUND"
        />
        <center><Link to="/">Return to Home Page</Link></center>
    </div>
);

export default NotFound;
