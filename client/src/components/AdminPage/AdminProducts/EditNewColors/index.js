import React, {useState, useEffect, useRef} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

import * as productsActions from '../../../../store/actions/products';

import { Typography, Box, Button } from '@material-ui/core';

import useStyles from "./useStyles";

import ColorItem from './ColorItem';
import ErrorModal from '../../../common/messages/ErrorModal';
import Notification from '../../../common/messages/Notification';
import Spinner from '../../../common/Spinner';


export default props => {

    const history = useHistory();

    const itemNo = props.match.params.itemNo;

    // get data (that are in need for the form) from data base:
    const dispatch = useDispatch();

    const getProductByItemNo = () => {
        productsActions.getProductItemByItemNo(itemNo)(dispatch)
    };

    const updateProduct = () => {
        productsActions.updateProduct(formData)(dispatch);
    };

    useEffect(() => {
        getProductByItemNo();
        return () => {
            getProductByItemNo();
        }
    }, [dispatch]);

    const product = useSelector(state => state.productItem.productItem);
    const productLoaded = useSelector(state => state.productItem.loaded);

    //server errors catching:
    const productError = useSelector(state => state.productItem.error);
    const [errorIsOpen, setErrorIsOpen] = useState(false);
    useEffect(() => {
        if(productError) {setErrorIsOpen(true)}
    },[productError]
    );
    const errorModalText = {
        title: `NO RESPONSE FROM SERVER`,
        description: `Request to server failed`,
        button: 'TRY AGAIN'
    };
    const closeErrorModal = () => setErrorIsOpen(false);

    const [formData, setFormData] = useState({});

    useEffect(()=> {
        if (product) {
            setFormData(product);
        }
        return () => {
            setFormData({})
        }
    },[product]);


    const onChangeColor = color => event => {
        if(formData && formData.colors) {
            formData.colors[formData.colors.findIndex(el => el._id === color._id)].imgsColor.splice(parseInt(event.target.name), 1, event.target.value);

            setFormData({
                ...formData
            });
        }
    };

    const ref = useRef(null);
    const timeout = 2000;
    const handleNotification = item => {
        ref.current(`Product ${item.name.toUpperCase()} has been updated!`);
    };

    const onSubmitHandler = async event => {
        event.preventDefault();
        await updateProduct();
        ref.current(`Color images of ${formData.name.toUpperCase()} has been saved!`);
    };

    const cutName = (string, l) => string.length >= l ? string.slice(0, l-3)+'...' : string;

    console.log(formData);

    const classes = useStyles();

    return (
        <Typography component="div" variant="body1">
            <form autoComplete="off">
            {productLoaded ?
                <Box color="secondary.main" p={3} borderBottom={1} textAlign="center" fontSize="h6.fontSize">
                    <Box>Edit colors images</Box>
                    <Box fontSize="body1.fontSize">{product.name.toUpperCase()}</Box>
                </Box> : <Spinner/>
            }
                <Box p={2}>
                    {productLoaded ?
                        <Typography component="div" variant="body1" className={classes.wrapper}>
                            {formData.colors ?
                                formData.colors.map(item =>
                                    <ColorItem
                                        key={item._id || Math.random()}
                                        item={item}
                                        onChangeColor={onChangeColor(item)}
                                        handleNotification={handleNotification}
                                    /> ) : <></>
                            }
                        </Typography> : <Spinner/>
                    }
                </Box>
                <Box >
                    <Button
                        fullWidth={true}
                        variant="outlined"
                        className={classes.btn}
                        onClick={onSubmitHandler}
                    > {`SAVE`}</Button>
                </Box>
                    {
                        product && product.itemNo ?
                        <Link to={`/admin/products/`+product.itemNo} className={classes.linkGreen}> {`<<   to ${cutName(product.name, 10)} page`} </Link> : <></>
                    }
                    <Box/>
                    <Link to={`/admin/products`} className={classes.linkPink}> {`<<   to Products List`} </Link>
            </form>
            <Notification timeout={timeout} children={add => (ref.current = add)} />
            <ErrorModal
                modalIsOpen={errorIsOpen}
                modalText={errorModalText}
                doFunction={() => history.push(`/admin/products/edit/`+product.itemNo)}
                closeFunction={closeErrorModal}
            />
        </Typography>
    )
};
