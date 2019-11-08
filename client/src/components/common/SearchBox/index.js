import React from 'react';

export default props => {

    const filterSearch = () => {
    };

    return (
        <div className="search-box">
            <p>THIS IS SEARCH BOX</p>
            <input
                className="form-control"
                type="text"
                onChange={filterSearch}
            />
        </div>
    )
};
