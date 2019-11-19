import useStyles from "./useStyles";
import React from "react";
import {Container} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import {useDispatch} from "react-redux";
import {showMenCategoriesAction, showWomenCategoriesAction} from "../../../../store/actions/header";


export default function SecondColumn() {
    const classes = useStyles();
    const dispatch = useDispatch();

    return (
        <React.Fragment>
            <Container maxWidth={false} className={classes.container}>
                <Grid item xs={12}>
                    <Button className={`${classes.btn} ${classes.bigBtn}`}>
                        <img className={classes.img} src='/img/twear_logo_grey-on-transparent.png' alt='NOT FOUND'/>
                    </Button>
                </Grid>
                <Grid item xs={6}>
                    <Button className={`${classes.btn} ${classes.btnBorder}`} onClick={() => dispatch(showWomenCategoriesAction())}>
                        Women
                    </Button>
                </Grid>
                <Grid item xs={6}>
                    <Button id='menCategories' className={classes.btn} onClick={() => dispatch(showMenCategoriesAction())}>
                        Men
                    </Button>
                </Grid>
            </Container>
        </React.Fragment>
    );
}