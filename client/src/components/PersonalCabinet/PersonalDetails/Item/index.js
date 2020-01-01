import React from "react";
import {Container} from "@material-ui/core";
import useStyles from "./useStyles";
import Button from '@material-ui/core/Button';


export default function Item(props) {

    const classes = useStyles();
    let {title, titleValue} = props;
    if (title === 'password') titleValue = 'XXXXXXXXX';
    return (
        <React.Fragment>
                <Container className={classes.itemContainer}>
                    <p>{title}: {titleValue}</p>
                    <Button variant="outlined" className={classes.btn}>Change your {title}</Button>
                </Container>
        </React.Fragment>
    );
}