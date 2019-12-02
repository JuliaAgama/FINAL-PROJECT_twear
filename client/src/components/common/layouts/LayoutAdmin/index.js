import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";

import { Grid, Hidden} from '@material-ui/core';

import useStyles from './useStyles';

import AdminSideBar from '../../../AdminPage/AdminSideBar';
import AdminSideBarMob from '../../../AdminPage/AdminSideBarMob';

const manageList = [
    {name: 'products', url: 'products'},
    {name: 'categories', url: 'categories'},
    {name: 'colors & sizes', url: 'options'},
    {name: 'info & settings', url: 'settings'}
];


export default props => {

    const classes = useStyles();

    let [active, setActive] = useState(false);

    useEffect((prevActive)=> {
        if (prevActive !== active) {
            setActive(true);
        }
    },[active]);

    return (
        <>
        <Grid container component="main" className={classes.root}>
            <Hidden smDown>
                <Grid item xs={12} md={4} lg={3}>
                    <div className={classes.paper}>
                        <Link to="/admin" >
                            <div className={classes.logo}>
                                <img className={classes.image} src="/img/twear_logo_grey-on-transparent.png" alt="NOT FOUND"/>
                            </div>
                        </Link>
                        <h3>admin panel</h3>
                        <AdminSideBar
                            active={active}
                            items={manageList}
                        />
                    </div>
                </Grid>
            </Hidden>
            <Hidden mdUp>
                <AdminSideBarMob items={manageList} />
            </Hidden>

            <Grid item xs={12} md={8} lg={9}>
                <div className="main-content">{props.children}</div>
            </Grid>
        </Grid>
        </>
    );
};
