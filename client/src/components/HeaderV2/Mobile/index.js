import useStyles from "./useStyles";
import React from "react";
import {Container} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from '@material-ui/icons/Search';
import {useDispatch, useSelector} from "react-redux";
import {hideMobileMenuAction, showMobileMenuAction} from "../../../store/actions/header";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";



export default function FirstContainer() {

    const classes = useStyles();
    const {show}  = useSelector(state => state.header);
    const dispatch = useDispatch();
    const showMenu = () => {
        if (show){
            dispatch(hideMobileMenuAction())
        } else {
            dispatch(showMobileMenuAction());
        }

    };
    const handleClickAway = (event) => {
        if (show && !(event.target.innerText === 'Men' ||
                      event.target.innerText === 'Women' ||
                      event.target.innerText === 'Currency' ||
                      event.target.innerText === 'Login'))
            dispatch(hideMobileMenuAction())
    };
    return (
        <React.Fragment>
            <Container maxWidth={false} className={classes.container}>
                <ClickAwayListener onClickAway={handleClickAway}>
                    <Button onClick={showMenu}
                            className={`${classes.btn} ${classes.smallBtn}`}>
                        <CloseIcon className={show ? '' : classes.hide}/>
                        <MenuIcon className={show ? classes.hide : ''}/>
                    </Button>
                </ClickAwayListener>
                <Button className={`${classes.btn} ${classes.bigBtn}`}><img className={classes.img} src='/img/twear_logo_grey-on-transparent.png' alt='NOT FOUND'/></Button>
                <Button className={`${classes.btn} ${classes.smallBtn}`}><LocalMallOutlinedIcon/></Button>
                <Button className={classes.btnSearch}>
                    <SearchIcon />
                    <InputBase className={classes.input} fullWidth={true}  placeholder='Search'/>
                </Button>
            </Container>
        </React.Fragment>
    );
}