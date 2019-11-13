import useStyles from "./useStyles";
import React, {useState} from "react";
import {Container} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from '@material-ui/icons/Search';
import ClickAwayListener from "@material-ui/core/ClickAwayListener";


export default function FirstContainer() {

    const classes = useStyles();
    const [isVisible, setVisibility] = useState(false);
    const handleClickAway = () => setVisibility(false);

    return (
        <React.Fragment>
            <Container maxWidth={false} className={classes.container}>
                <ClickAwayListener onClickAway={handleClickAway}>
                    <Button className={isVisible ? `${classes.btn} ${classes.btnSearch}` : classes.btn}
                            onClick={() => {setVisibility(true)}}
                    >
                        {!isVisible ? 'Search' : (<><SearchIcon/><InputBase fullWidth={true} className={classes.input}/></>)}
                    </Button>
                </ClickAwayListener>
                <Button className={classes.btn}>Currency</Button>
            </Container>
        </React.Fragment>
    );
}