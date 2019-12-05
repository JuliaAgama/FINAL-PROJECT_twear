import React from 'react';
import { Link } from 'react-router-dom';

import { Typography, Box, Grid, ListItem, Divider, Hidden } from '@material-ui/core';

import useStyles from './useStyles';


export default props => {

    const {item} = props;

    const classes = useStyles();

    const cutName = (string, l) => string.length >= l ? string.slice(0, l-3)+'...' : string;

    return (
        <Grid item xs={12} sm={6} lg={4}>
        <Divider />
        <ListItem>
            <Link to={"/admin/products/"+item.itemNo} className={classes.link}>
                <Grid container className={classes.paper}>
                    <Grid item container>
                        <Grid item>
                            <Box className={classes.image}>
                                <img src={item.imgs[0]} className={classes.img} alt="Not Found"/>
                            </Box>
                        </Grid>
                        <Grid item>
                            <Typography variant="body2" className={classes.title}>{cutName(item.name, 20)}</Typography>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Typography component="div" variant="body2" >
                            <Box fontStyle="italic" fontSize={14} fontWeight="light" className={classes.art}>{item.itemNo}</Box>
                        </Typography>
                    </Grid>
                </Grid>
            </Link>
        </ListItem>
        </Grid>
    )
};
