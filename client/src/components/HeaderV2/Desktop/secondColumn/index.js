import useStyles from "./useStyles";
import React from "react";
import {Container} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import {useDispatch} from "react-redux";
import {showDesktopCategoriesMenuAction} from "../../../../store/actions/header";


export default function SecondColumn() {

    const classes = useStyles();

    const dispatch = useDispatch();
    const showMenu = (isMen) => dispatch(showDesktopCategoriesMenuAction(isMen));

    const showCategories = (event) => {
        const isMen = event.target.innerText;
        if (isMen === 'Men') {
            showMenu(true);
        } else {
            showMenu(false)
        }
    };

    return (
        <React.Fragment>
            <Container maxWidth={false} className={classes.container}>
                <Grid item xs={12}>
                    <Button className={`${classes.btn} ${classes.bigBtn}`}>
                        <img className={classes.img} src='/img/twear_logo_grey-on-transparent.png' alt='NOT FOUND'/>
                    </Button>
                </Grid>
                <Grid item xs={6}>
                    <Button className={`${classes.btn} ${classes.btnBorder}`} onClick={showCategories}>
                        Women
                    </Button>
                </Grid>
                <Grid item xs={6}>
                    <Button className={classes.btn} onClick={showCategories}>
                        Men
                    </Button>
                </Grid>
            </Container>
        </React.Fragment>
    );
}