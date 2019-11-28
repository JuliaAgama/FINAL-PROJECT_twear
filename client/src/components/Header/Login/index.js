import React from "react";
import Button from "@material-ui/core/Button";
import PersonIcon from '@material-ui/icons/Person';
import {Link} from "react-router-dom";
import {openLoginModalAction} from "../../../store/actions/modal";
import {useDispatch, useSelector} from "react-redux";
import useStyles from "./useStyles";


export default function Login() {

    const classes = useStyles();
    const dispatch = useDispatch();
    const {customer}  = useSelector(state => state.customers);

    return (
        <React.Fragment>
            <Button className={classes.btn}
                    onClick={customer.firstName ? () => {} : () => dispatch(openLoginModalAction())}>
                {customer.firstName ?
                    <Link to='/personalCabinet'>
                        <div className={classes.link}>
                            <PersonIcon/>
                            <span className={classes.name}>{customer.firstName}</span>
                        </div>
                    </Link>
                    :
                    'Log In'
                }
            </Button>
        </React.Fragment>
    );
}