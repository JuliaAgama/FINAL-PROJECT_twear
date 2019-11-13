import useStyles from "./useStyles";
import React from "react";
import {Container} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from '@material-ui/icons/Search';



export default function FirstContainer() {

    const classes = useStyles();

    return (
        <React.Fragment>
            <Container maxWidth={false} className={classes.container}>
                <Button className={`${classes.btn} ${classes.smallBtn}`}>
                    <MenuIcon className={classes.icon}/>
                </Button>
                <Button className={`${classes.btn} ${classes.bigBtn}`}><img className={classes.img} src='/img/twear_logo_grey-on-transparent.png' alt='NOT FOUND'/></Button>
                <Button className={`${classes.btn} ${classes.smallBtn}`}><LocalMallOutlinedIcon/></Button>
                <Button className={classes.btnSearch}>
                    <SearchIcon />
                    <InputBase className={classes.input} fullWidth={true}  placeholder='Search'/>
                </Button>
                {/*<CloseIcon/>*/}
            </Container>
        </React.Fragment>
    );
}