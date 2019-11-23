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
            <Grid item xs={12} md={4} lg={3}>
                <div className={classes.paper}>
                    <Link href="/admin" >
                        <div className={classes.logo}>
                            <img className={classes.image}  src="/img/twear_logo_grey-on-transparent-SQUARE.png" alt="NOT FOUND"/>
                        </div>
                    </Link>
                    <h3>admin panel</h3>
                    <AdminSideBar
                        active={active}
                        items={manageList}
                    />
                </div>
            </Grid>

            <Grid item xs={12} md={8} lg={9}>
                <div className="main-content">{props.children}</div>
            </Grid>
        </Grid>
        </>
    );
};
