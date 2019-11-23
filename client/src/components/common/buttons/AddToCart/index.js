import React from 'react';

import IconButton from '@material-ui/core/IconButton';
// import Fab from '@material-ui/core/Fab';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

import useStyles from './useStyles';


export default props => {
    const classes = useStyles();
    return (
        <IconButton
            size={props.size || "medium"}
            className={classes[props.className] || classes.fabBlue}
            color={props.color || "primary"}
            aria-label="add to shopping cart"
            onClick={props.onClick}
        >
            <AddShoppingCartIcon
            />
        </IconButton>
    )
};
