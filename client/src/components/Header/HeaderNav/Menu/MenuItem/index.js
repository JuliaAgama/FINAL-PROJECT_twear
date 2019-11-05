import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const buildClass = item => {
    return `nav-item ${item.active ? 'active' : ''}`;
};

// const MenuItem = ({item, productCount}) => (
const MenuItem = ({item}) => (
    <>
    <li className={buildClass(item)}>
        <Link className='nav-link' to={item.url}>{item.title}
            {/* { productCount ? <span>({productCount})</span> : '' } */}
        </Link>
    </li>
    </>
);

MenuItem.defaultProps = {
    item: {}
};

MenuItem.propTypes = {
    item: PropTypes.object
};

export default MenuItem;