import React, {useState, useEffect} from 'react';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import useStyles from './useStyles';

import AdminSideBar from '../../../AdminPage/AdminSideBar';

const manageList = [
    {name: 'products', url: 'products'},
    {name: 'categories', url: 'categories'},
    {name: 'options sets (colors, sizes)', url: 'options'}];


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
            <Grid item xs={12} md={4} lg={3} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <Link href="/admin" className={classes.logo}>
                        <img className="img-fluid" src="/img/twear_logo_grey-on-transparent.png" alt="NOT FOUND"/>
                    </Link>
                    <h3>admin panel</h3>
                    <AdminSideBar
                        active={active}
                        items={manageList}
                    />
                    <p>Go to <a href="/">shop</a>.</p>
                </div>
            </Grid>

            <Grid item xs={12} md={8} lf={9}>
                <div className="main-content">{props.children}</div>
            </Grid>
        </Grid>
        </>
    );
};
