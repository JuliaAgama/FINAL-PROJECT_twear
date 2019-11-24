import React from "react";
import Button from "@material-ui/core/Button";
import Badge from "@material-ui/core/Badge";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import useStyles from "./useStyles";


export default function MiniCart() {

    const classes = useStyles();

    return (
        <React.Fragment>
            <Button className={classes.btn}>
                <Hidden smDown>
                    <Badge color="default" badgeContent={4} className={classes.badge}>
                        <Typography className={classes.padding}>Shopping Bag</Typography>
                    </Badge>
                </Hidden>
                <Hidden mdUp>
                    <LocalMallOutlinedIcon/>
                </Hidden>
            </Button>
        </React.Fragment>
    );
}