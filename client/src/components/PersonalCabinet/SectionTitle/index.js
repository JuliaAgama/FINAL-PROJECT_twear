import React from "react";
import {Container} from "@material-ui/core";
import useStyles from "./useStyles";

export default function SectionTitle(props) {
    const {title, mainTitle} = props;
    const classes = useStyles();

    return (
        <React.Fragment>
            <Container maxWidth={false} className={mainTitle ? `${classes.container} ${classes.border}` : classes.container}>
                <p className={mainTitle ? classes.mainTitle : classes.title}>{title}</p>
            </Container>
        </React.Fragment>
    );
}