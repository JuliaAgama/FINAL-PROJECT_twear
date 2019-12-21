import React, {useState, useEffect} from "react";
import {Link, Grid, Box} from "@material-ui/core";
import useStyles from './useStyles';

const CategoryHomeItemMobile = props => {

    const {name, id, href, image} = props;

    const [css, setCss] = useState({backgroundImage: 'transparent'});
    useEffect(() => {
        if (image) {
            setCss({backgroundImage: `url(${image})`});
        }
        return () => {
            setCss({});
        }
    }, [image]);

    const classes = useStyles(css);

    return (
        <Grid item xs={12} container className={classes.root}>
            <Grid item xs={12} className={classes.header}>
                <Box fontSize="h6.fontSize">{name}</Box>
            </Grid>
            <Grid item xs={12} container id={`item${id}`}  className={classes.paper}>
                <Grid item xs={6}>
                    <Link href={href+'&men'} className={classes.link} >
                        <Box className={classes.btn}>MEN</Box>
                    </Link>
                </Grid>
                <Grid item xs={6}>
                    <Link href={href+'&women'} className={classes.link}>
                        <Box className={classes.btn}>WOMEN</Box>
                    </Link>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default CategoryHomeItemMobile;
