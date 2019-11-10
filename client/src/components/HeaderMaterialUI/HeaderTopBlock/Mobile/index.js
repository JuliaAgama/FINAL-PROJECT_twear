import useStyles from "./useStyles";
import React from "react";
import {Container} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import MenuIcon from '@material-ui/icons/Menu';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';

export default function HeaderTopBlockMobile() {

    const classes = useStyles();

    return (
        <React.Fragment>
            <Container maxWidth="md" className={classes.container}>
                <Box className={`${classes.menu}`}><MenuIcon/></Box>
                <Box className={`${classes.brandSM}`}><img className={classes.img} src='/img/twear_logo_grey-on-transparent.png' alt='NOT FOUND'/></Box>
                <Box className={`${classes.bagSM}`}><LocalMallOutlinedIcon/></Box>
            </Container>
        </React.Fragment>
    );
}
