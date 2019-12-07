import React, {useState} from "react";
import Button from "@material-ui/core/Button";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from '@material-ui/icons/Search';
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Hidden from "@material-ui/core/Hidden";
import useStyles from "./useStyles";
import {Container} from "@material-ui/core";


export default function Search() {

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
}