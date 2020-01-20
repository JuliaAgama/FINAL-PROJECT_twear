import React, {useState} from "react";
import {Container, Grid} from "@material-ui/core";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import useStyles from "./useStyles";
import {useDispatch} from "react-redux";
import Dialog from "@material-ui/core/Dialog";
import CartItem from '../../CheckoutPage/CheckoutCart/CartItem'
import Backdrop from "@material-ui/core/Backdrop/Backdrop";
import Fade from "@material-ui/core/Fade";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";

const getProductsList = (orders, orderNo) => {
    const currentOrder = orders.find(item => item.orderNo === orderNo);
    const productsList = currentOrder.products.map((item, index) => <CartItem key={index} item={item}/>);
    return productsList;
};

const getOrderDetails = (orders, orderNo) => {
    const order = orders.find(item => item.orderNo === orderNo);
    return (
        <>
            <p>Delivery Info:</p>
            <p>Name: {order.deliveryInfo.firstName + ' ' + order.deliveryInfo.lastName}</p>
            <p>Address: {order.deliveryInfo.address + ', ' + order.deliveryInfo.city + ', ' + order.deliveryInfo.country}</p>
            <p>Postal: {order.deliveryInfo.postal}</p>
            <p>Telephone: {order.deliveryInfo.telephone}</p>
        </>
    )
}

export default function Orders(props) {

    const classes = useStyles();
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
    const [currentOrder, setCurrentOrder] = useState('');
    const{orders} = props;

    const clickHandler = (event) => {
        setCurrentOrder(event.target.id);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    let tableRows = [];

    if (orders) {
        tableRows = orders.map(order => (
            <TableRow key={order._id} className={classes.tableRows} onClick={clickHandler} id={order.orderNo}>
                <TableCell component="th" scope="row" id={order.orderNo}>{order.orderNo}</TableCell>
                <TableCell align="right" id={order.orderNo}>$ {order.totalSum}</TableCell>
                <TableCell align="right" id={order.orderNo}>{order.date.slice(0, 10)}</TableCell>
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
                <Dialog
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={classes.modal}
                    scroll='paper'
                    maxWidth='lg'
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={open}>
                        <div className={classes.paper}>
                            <DialogTitle className={classes.orderTitle}>Order details</DialogTitle>
                            <Grid container justify="space-between" alignItems="flex-start">
                                {open ? getProductsList(orders, currentOrder) : ''}
                            </Grid>
                            <DialogContent>
                                {open ? getOrderDetails(orders, currentOrder) : ''}
                            </DialogContent>
                        </div>
                    </Fade>
                </Dialog>
            </Container>
        </React.Fragment>
    );
}