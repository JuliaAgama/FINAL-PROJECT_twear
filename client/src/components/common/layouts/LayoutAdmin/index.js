import React, {useState, useEffect} from 'react';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import AdminSideBar from '../../../AdminPage/AdminSideBar';

const manageList = [
    {title: 'products', url: 'products'},
    {title: 'categories', url: 'categories'},
    {title: 'options sets (colors, sizes)', url: 'options'}];


const useStyles = makeStyles((theme) => {
    return ({
        root: {
            height: '100vh',
        },
        paper: {
            margin: theme.spacing(1),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        logo: {
            width: '8rem',
            marginTop: '1rem'
        },
    });
});

export default props => {

    const classes = useStyles();

    let [active, setActive] = useState(false);

    // const onClick = (ind) => {
    //     setActive(true);
    // }

    useEffect((prevActive)=> {
        if (prevActive !== active) {
            setActive(true);
            // console.log('' );
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
                    <AdminSideBar
                        active={active}
                        items={manageList}
                        //items={props.manageList}
                        />
                </div>
            </Grid>

            <Grid item xs={12} md={8} lf={9}>
                <div className="main-content">{props.children}</div>
            </Grid>
        </Grid>
        </>
    );
};
