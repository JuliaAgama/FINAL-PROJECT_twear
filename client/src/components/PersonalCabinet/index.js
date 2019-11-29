import React from "react";
import {Container} from "@material-ui/core";
import useStyles from "./useStyles";
import Header from "./Header";



export default function PersonalCabinet() {

    const classes = useStyles();

    return (
        <React.Fragment>
            <div>
            <Container maxWidth={false} className={classes.container}>
                <Header/>
            </Container>
            </div>
        </React.Fragment>
    );
}