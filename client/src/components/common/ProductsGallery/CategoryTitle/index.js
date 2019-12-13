import React from 'react';
import {Container} from "@material-ui/core";
import useStyles from "./useStyles";


export default function CategoryTitle(props) {
    const classes = useStyles();
    return (
        <Container maxWidth={false}>
           <p className={classes.title}>{props.title}</p>
        </Container>
    );
}
