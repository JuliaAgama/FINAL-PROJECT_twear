import useStyles from "./useStyles";
import React, {useState} from "react";
import {Container} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';

export default function HeaderTopBlockMobile() {

    const classes = useStyles();
    const [menuIconToggle, setToggle] = useState(false);

    return (
        <React.Fragment>
            <Container maxWidth="md" className={classes.container}>
                <Box onClick={() => setToggle(!menuIconToggle)}
                    className={classes.menu}>
                    <CloseIcon className={menuIconToggle ? '' : classes.hide}/>
                    <MenuIcon className={menuIconToggle ? classes.hide : ''}/>
                </Box>
                <Box className={classes.brandSM}><img className={classes.img} src='/img/twear_logo_grey-on-transparent.png' alt='NOT FOUND'/></Box>
                <Box className={classes.bagSM}><LocalMallOutlinedIcon/></Box>
            </Container>
        </React.Fragment>
    );
}
