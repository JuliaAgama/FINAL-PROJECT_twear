import React from 'react';
import { Link } from 'react-router-dom';
import useStyles from "./useStyles";

export default function  AccessDenied() {
    const classes = useStyles();

   return   <div className={classes.container}>
                <img  className={classes.img} src="/img/wiki-access-denied.jpg" alt="NOT FOUND"/>
                <span className={classes.link}><Link to="/">Return to TWEAR</Link></span>
            </div>
};
