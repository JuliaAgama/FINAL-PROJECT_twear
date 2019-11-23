import useStyles from "./useStyles";
import React, {useState} from "react";
import Button from "@material-ui/core/Button";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from '@material-ui/icons/Search';
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Hidden from "@material-ui/core/Hidden";


export default function Search() {

    const classes = useStyles();
    const [isVisible, setVisibility] = useState(false);
    const handleClickAway = () => setVisibility(false);

    return (
        <React.Fragment>
            <Hidden smDown>
                <ClickAwayListener onClickAway={handleClickAway}>
                    <Button className={isVisible ? `${classes.btn} ${classes.btnSearch}` : classes.btn}
                            onClick={() => {setVisibility(true)}}
                    >
                        {!isVisible ? 'Search' : (<><SearchIcon/><InputBase fullWidth={true} className={classes.input}/></>)}
                    </Button>
                </ClickAwayListener>
            </Hidden>
            <Hidden mdUp>
                <Button className={classes.btnSearch}>
                    <SearchIcon />
                    <InputBase className={classes.input} fullWidth={true}  placeholder='Search'/>
                </Button>
            </Hidden>
        </React.Fragment>
    );
}