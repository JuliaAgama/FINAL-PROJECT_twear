import useStyles from "./useStyles";
import React from "react";
import Grid from "@material-ui/core/Grid";
import FirstColumn from './firstColumn'
import ThirdColumn from "./thirdColumn";
import SecondColumn from "./secondColumn";


export default function MainContainer() {

    const classes = useStyles();

    return (
        <React.Fragment>
            <Grid item xs={3}>
                <FirstColumn/>
            </Grid>
            <Grid item xs={6}>
                <SecondColumn/>
            </Grid>
            <Grid item xs={3}>
                <ThirdColumn/>
            </Grid>
        </React.Fragment>
    );
}