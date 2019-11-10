import useStyles from "./useStyles";
import React from "react";
import {Container} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import InputBase from "@material-ui/core/InputBase";

export default function HeaderBottomBlockMobile() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Container maxWidth="md" className={classes.searchContainer}>
                <SearchIcon/>
                <InputBase className={classes.input} placeholder='Search'/>
            </Container>
        </React.Fragment>
    );
}