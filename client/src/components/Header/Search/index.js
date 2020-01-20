import React, {useState} from "react";

import {InputBase, ClickAwayListener, Hidden, Container} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import {  useHistory } from 'react-router-dom';

import useStyles from "./useStyles";

export default () => {

    const classes = useStyles();

    const history = useHistory();

    const [isVisible, setVisibility] = useState(false);
    const [queryString, setQueryString] = useState(null);

    const handleClickAway = () => {
        setVisibility(false);
        setQueryString(null);
    };
    const changeHandler = (event) => {
        setQueryString(event.target.value);
    };

    const clickHandler = (event) => {
        setVisibility(true);
        if(event.key === 'Enter') {
            history.push(`/search/${queryString}`);
            setQueryString(null);
        }
    };

    return (
        <React.Fragment>
            <Hidden smDown>
                <ClickAwayListener onClickAway={handleClickAway}>
                    <Container className={isVisible ? `${classes.container} ${classes.search}` : classes.container}
                               onClick={clickHandler}
                               onKeyPress={clickHandler}
                    >
                        {!isVisible ? 'Search' : (<><SearchIcon /><InputBase fullWidth={true} onChange={changeHandler} className={classes.input}/></>)}
                    </Container>
                </ClickAwayListener>
            </Hidden>
            <Hidden mdUp>
                <Container className={classes.container} onClick={clickHandler} onKeyPress={clickHandler}>
                    <SearchIcon />
                    <InputBase className={classes.input} onChange={changeHandler} fullWidth={true}  placeholder='Search'/>
                </Container>
            </Hidden>
        </React.Fragment>
    );
};