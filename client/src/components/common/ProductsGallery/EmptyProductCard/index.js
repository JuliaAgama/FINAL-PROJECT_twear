import React from 'react';
import {Container} from "@material-ui/core";
import useStyles from "./useStyles";


export default function ProductCard(props) {
    const classes = useStyles();
    const {borderRight} = props;

    return (
        <Container maxWidth={false}
                   className={borderRight ? classes.mainContainer : `${classes.mainContainer} ${classes.borderRight}`}>
            <p/>
        </Container>
    );
}