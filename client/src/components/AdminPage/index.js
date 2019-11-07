import React from 'react';
// import Link from '@material-ui/core/Link';
// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => {
    return ({
        root: {
            height: '100vh',
        },
        image: {
            backgroundImage: 'url("/img/background_AdminPage.jpg")',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'right',
            width: '100%',
            height: '100%',
        },
        header: {
            paddingTop: '1rem',
            textAlign: 'center',
            color: theme.palette.secondary.main,
        },
    });
});

export default (props) => {

    const classes = useStyles();

    return(
        <div className={classes.root}>
            <div className={classes.image}>
                <div className={classes.header}>
                    <h3>ADMIN PAGE</h3>
                </div>
            </div>
        </div>
    )
};
