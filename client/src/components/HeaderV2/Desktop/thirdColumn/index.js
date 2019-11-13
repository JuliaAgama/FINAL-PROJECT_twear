import useStyles from "./useStyles";
import React from "react";
import {Container} from "@material-ui/core";
import Button from "@material-ui/core/Button";


export default function ThirdColumn() {

    const classes = useStyles();

    return (
        <React.Fragment>
            <Container maxWidth={false} className={classes.container}>
                <Button className={classes.btn}>Shopping Bag</Button>
                <Button className={classes.btn}>Login</Button>
            </Container>
        </React.Fragment>
    );
}