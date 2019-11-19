import useStyles from "./useStyles";
import React, {useState} from "react";
import Grid from "@material-ui/core/Grid";
import {ItemsList} from "../Item";
import {Container} from "@material-ui/core";
import {useSelector} from "react-redux";

export default function HeaderDropDownBlock() {

    const {show}  = useSelector(state => state.header);
    let items = ItemsList(false);
    const classes = useStyles();

    return (
        <React.Fragment>
            <Grid container
                  item xs={12}
                  spacing={0}
                  className={show ? classes.border : classes.hide}>
                    <Container maxWidth={false} className={classes.container}>
                        {items}
                    </Container>
            </Grid>
        </React.Fragment>
    );
}