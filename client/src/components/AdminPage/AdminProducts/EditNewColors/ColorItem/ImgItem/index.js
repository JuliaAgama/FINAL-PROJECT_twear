import React from 'react';
// import React, {useState, useEffect} from 'react';


import { Box, Tooltip } from '@material-ui/core';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';

import useStyles from './useStyles';


export default props => {

    const {item, url, handleOnDelete} = props;


    const classes = useStyles();

    return (
        <Box className={classes.imgContainer} style={{backgroundImage: `url(${url})`}}>
            {item && item.imgsColor.some(el => el === url) ?
                <></> : <Box className={classes.newImg}>New</Box>
            }
            <Tooltip title="Delete image" >
                <DeleteOutlineOutlinedIcon aria-label="delete" className={classes.deleteBtn} onClick={handleOnDelete}/>
            </Tooltip>
        </Box>
        )
    };
