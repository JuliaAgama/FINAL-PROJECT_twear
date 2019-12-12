import React from 'react';
import {Container} from "@material-ui/core";
import useStyles from "./useStyles";
import {Link} from "react-router-dom";


export default function CategoryLink(props) {
    const classes = useStyles();
    const {borderRight, categoryLink, categoryName, borderBottom} = props;
    return (
        <Container maxWidth={false} className={ borderRight ? classes.container :
                                                !borderRight && borderBottom ?
                                                `${classes.container} ${classes.borderBottom} ${classes.borderRight}` :
                                                `${classes.container} ${classes.borderRight}`}>
            <Link to={categoryLink}  className={classes.link}>
                <span className={classes.link}>{categoryName}</span>
            </Link>
        </Container>
    );
}
