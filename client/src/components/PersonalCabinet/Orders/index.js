import React from "react";
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
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import CartItem from '../../CheckoutPage/CheckoutCart/CartItem'
import {closeModalAction} from "../../../store/actions/modal";
import Backdrop from "@material-ui/core/Backdrop/Backdrop";
import Fade from "@material-ui/core/Fade";

export default function Orders(props) {

    const classes = useStyles();
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
    const{orders} = props;
    let products = [];
    const clickHandler = (event) => {
        const currentOrder = orders.find(item => item.orderNo === event.target.id);
        products = currentOrder.products.map((item, index) => <CartItem key={index} item={item}/>);
        console.log(currentOrder)
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    };
        // dispatch(openAddNewAddress('address'));

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
                {/*<div>*/}
                {/*    <Dialog*/}
                {/*        open={open}*/}
                {/*        onClose={handleClose}*/}
                {/*        aria-labelledby="alert-dialog-title"*/}
                {/*        aria-describedby="alert-dialog-description"*/}
                {/*    >*/}
                {/*        <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>*/}
                {/*        <DialogContent>*/}
                {/*            <Grid container justify="space-between" alignItems="flex-start">*/}
                {/*                {products}*/}
                {/*            </Grid>*/}
                {/*            /!*<DialogContentText id="alert-dialog-description">*!/*/}
                {/*            /!*    Let Google help apps determine location. This means sending anonymous location data to*!/*/}
                {/*            /!*    Google, even when no apps are running.*!/*/}
                {/*            /!*</DialogContentText>*!/*/}
                {/*        </DialogContent>*/}
                {/*    </Dialog>*/}
                {/*</div>*/}
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
                            <Grid container justify="space-between" alignItems="flex-start">
                                <>
                                    {products}
                                </>
                            </Grid>
                        </div>
                    </Fade>
                </Dialog>
            </Container>
        </React.Fragment>
    );
}