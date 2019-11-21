import useStyles from "./useStyles";
import React from "react";
import Button from "@material-ui/core/Button";

export default function CategoriesMenu(props) {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Button className={props.border ?`${classes.btn} ${classes.btnBorder}`: classes.btn}>
                {props.title}
            </Button>
        </React.Fragment>
    );
}