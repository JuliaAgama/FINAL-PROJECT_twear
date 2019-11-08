import React from 'react';
import { Hidden } from '@material-ui/core';
import withWidth from '@material-ui/core/withWidth';

import useStyles from './useStyles';


export default withWidth()(props => {

    const classes = useStyles();

    return(
        <Hidden smDown>
            <div className={classes.root}>
                <div className={classes.image}>
                    <div className={classes.header}>
                    </div>
                </div>
            </div>
        </Hidden>
    )
});
