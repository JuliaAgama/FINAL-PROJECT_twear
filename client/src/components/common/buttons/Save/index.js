import React from 'react';

import Fab from '@material-ui/core/Fab';
// import SaveAltIcon from '@material-ui/icons/SaveAlt';
import PublishIcon from '@material-ui/icons/Publish';
import useStyles from './useStyles';


export default props => {
    const classes = useStyles();
    return (
        <Fab
            size={props.size || "medium"}
            className={classes[props.className] || classes.fabGreen}
            color={props.color || "primary"}
            aria-label="add"
            onClick={props.onClick}
        >
            <PublishIcon/>
            {/* <SaveAltIcon/> */}
        </Fab>
    )
};
