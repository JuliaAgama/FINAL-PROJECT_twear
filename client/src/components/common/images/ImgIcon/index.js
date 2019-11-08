import React from 'react';

import useStyles from './useStyles';


export default props => {
    const classes = useStyles();
    return (
        <div className={classes.imageBox}>
            <img
                className={classes.image}
                src={props.src}
                alt="NOT FOUND"
            />
        </div>
    )
};
