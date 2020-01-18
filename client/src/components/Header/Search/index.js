import React, {useState} from "react";

import {InputBase, ClickAwayListener, Hidden, Container} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';

import useStyles from "./useStyles";


export default () => {

    const classes = useStyles();
    const [isVisible, setVisibility] = useState(false);
    const handleClickAway = () => setVisibility(false);

    return (
        <React.Fragment>
            <Hidden smDown>
                <ClickAwayListener onClickAway={handleClickAway}>
                    <Container className={isVisible ? `${classes.container} ${classes.search}` : classes.container}
                               onClick={() => {setVisibility(true)}}
                    >
                        {!isVisible ? 'Search' : (<><SearchIcon /><InputBase fullWidth={true} className={classes.input}/></>)}
                    </Container>
                </ClickAwayListener>
            </Hidden>
            <Hidden mdUp>
                <Container className={classes.container}>
                    <SearchIcon />
                    <InputBase className={classes.input} fullWidth={true}  placeholder='Search'/>
                </Container>
            </Hidden>
        </React.Fragment>
    );
};