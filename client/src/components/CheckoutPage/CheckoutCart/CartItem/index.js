import React from 'react';
import { useHistory } from 'react-router-dom';

import { Box, Grid, Badge } from '@material-ui/core';

import useStyles from './useStyles';



export default props => {

    const {item} = props;

    const cutName = (string, l) => string.length > l ? string.slice(0, l-3)+'...' : string;
    const history = useHistory();
    const classes = useStyles();

    return (
        <>
            {item.product.colors.find(el => el.color._id === item.color._id || el.color === item.color._id).imgsColor && item.product.colors.find(el => el.color._id === item.color._id || el.color === item.color._id).imgsColor[0] ?
                <Grid item xs={2} className={classes.imgContainer}
                    style={{backgroundImage:`url(${item.product.colors.find(el => el.color._id === item.color._id || el.color === item.color._id).imgsColor[0]})`}}
                >
                    <Badge
                        badgeContent={item.quantity}
                        color="primary"
                        invisible={false}
                        className={classes.badge}
                    />
                </Grid> :
                <Grid item xs={2} className={classes.imgContainer}
                    style={{backgroundImage:`url(${item.product.imgs[0]}`}}
                >
                    <Badge
                        badgeContent={item.quantity}
                        color="primary"
                        invisible={false}
                        className={classes.badge}
                    />
                </Grid>
            }
            <Grid item xs={8}>
                <Box className={classes.title} fontSize='body1.fontSize' p={1}>{cutName(item.product.name, 25)}</Box>
                <Box px={1}>Color: {item.color.name.toUpperCase()}</Box>
                <Box px={1}>Size: {item.size.name.toUpperCase()}</Box>
            </Grid>

            <Grid item xs={2} style={{alignSelf: "center"}}>
                <Box px={1} fontSize='body1.fontSize' textAlign='center'>${item.quantity * item.product.price}</Box>
            </Grid>
        </>
    )
};
