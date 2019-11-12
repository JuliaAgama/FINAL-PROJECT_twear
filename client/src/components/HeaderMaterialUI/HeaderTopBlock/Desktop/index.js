import useStyles from "./useStyles";
import React, {useState} from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from '@material-ui/icons/Search';
import ClickAwayListener from "@material-ui/core/ClickAwayListener";


export default function HeaderTopBlockDesktop() {

    const [isVisible, setVisibility] = useState(false);

    const classes = useStyles();

    const handleClickAway = () => setVisibility(false);

    return (
        <React.Fragment>
            <Grid item xs={3}>
                <ClickAwayListener onClickAway={handleClickAway}>
                    <Box onClick={() => {setVisibility(true)}}
                         className={isVisible ?
                             `${classes.box} ${classes.searchIcon}` :
                             `${classes.box} ${classes.searchTitle}`}
                    >
                        <span className={!isVisible ? 'null' : classes.hide}>Search</span>
                        <SearchIcon className={isVisible ? classes.icon : classes.hide}/>
                        <InputBase className={isVisible ? classes.input : classes.hide} />
                    </Box>
                </ClickAwayListener>
            </Grid>
            <Grid item xs={6}>
                <Box className={`${classes.box} ${classes.brand}`}><img className={classes.img} src='/img/twear_logo_grey-on-transparent.png' alt='NOT FOUND'/></Box>
            </Grid>
            <Grid item xs={3}>
                <Box className={`${classes.box} ${classes.bag}`}>Shopping Bag</Box>
            </Grid>
        </React.Fragment>
    );
}