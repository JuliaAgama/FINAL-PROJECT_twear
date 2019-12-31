import React from "react";
import {Container} from "@material-ui/core";
import useStyles from "./useStyles";
import Box from "@material-ui/core/Box";

export default function SectionContainer(props) {

    const classes = useStyles();
    const {title, description, body} = props;
    return (
        <React.Fragment>
            <Container maxWidth={false} className={classes.mainContainer}>
                <Container className={classes.container}>
                    {title ?
                        <Box className={classes.title}>
                            <p>{title}</p>
                            <p className={classes.addInfo}>{description}</p>
                        </Box> : ''
                    }
                    <Box className={classes.body}>
                        <div>{props.children}</div>
                        <p>{body}</p>
                    </Box>
                </Container>
            </Container>
        </React.Fragment>
    );
}