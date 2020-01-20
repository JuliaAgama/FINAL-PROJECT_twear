import React from "react";
import {Container} from "@material-ui/core";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import useStyles from "./useStyles";
import {useDispatch} from "react-redux";
import Button from "@material-ui/core/Button";
import {openAddNewAddress} from "../../../store/actions/modal";

export default function Orders(props) {

    const classes = useStyles();
    const dispatch = useDispatch();
    const{orders} = props;
    const clickHandler = () => console.log("hi")
        // dispatch(openAddNewAddress('address'));

    let tableRows = [];

    if (orders) {
        tableRows = orders.map(order => (
            <TableRow key={order._id} className={classes.tableRows} onClick={clickHandler}>
                <TableCell component="th" scope="row">{order.orderNo}</TableCell>
                <TableCell align="right">$ {order.totalSum}</TableCell>
                <TableCell align="right">{order.date.slice(0, 10)}</TableCell>
            </TableRow>
        ))
    }

    return (
        <React.Fragment>
            <Container maxWidth={false} className={classes.container}>
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>OrderNo</TableCell>
                                <TableCell align="right">Sum</TableCell>
                                <TableCell align="right">Date</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {tableRows}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </React.Fragment>
    );
}