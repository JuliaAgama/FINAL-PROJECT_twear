import React, {useState, useEffect} from 'react';
// import {useSelector} from "react-redux";
import {useDispatch, useSelector} from "react-redux";
import { useHistory } from 'react-router-dom';
import cloneDeep from 'lodash/cloneDeep';

import * as ordersActions from '../../store/actions/orders';

import { Box, Breadcrumbs} from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

import useStyles from './useStyles';

import CheckoutInfo from './CheckoutInfo';
import shippingOptionsBase from './shippingOptionsBase';
import CheckoutShipping from './CheckoutShipping';
import CheckoutPayment from './CheckoutPayment';


export default props => {

    const {calcShipping} = props;

    const history = useHistory();
    const dispatch = useDispatch();

    const customerLoaded = useSelector(state => state.customers.loaded);
    const {customer} = useSelector(state => state.customers);

    const {cart} = useSelector(state => state.cart);
    const subTotal = cloneDeep(cart.products).reduce((sum, el) => sum + el.product.price * el.quantity, 0);

    const [formData, setFormData] = useState({subscribe: false, saveLocal: false, status: 'new', products: cloneDeep(cart.products), shipping: {price: 0}, paymentInfo: 'card', totalSum: subTotal});

    const [infoIsOpen, setInfoIsOpen] = useState(false);
    const [shippingIsOpen, setShippingIsOpen] = useState(false);
    const [paymentIsOpen, setPaymentIsOpen] = useState(false);

    const [onShipppingAvailable, setOnShippingAvailable] = useState(false);
    const [onPaymentAvailable, setOnPaymentAvailable] = useState(false);
    const [onCompleteAvailable, setOnCompleteAvailable] = useState(false);

    // console.log('formData: ', formData);

    useEffect(() => {
        dispatch(ordersActions.cleanOrderItem(formData));

        setInfoIsOpen(true);
        setShippingIsOpen(false);
        setPaymentIsOpen(false);

        return ( () => {
            // setFormData({subscribe: false, saveLocal: false, status: 'new', products: cloneDeep(cart.products), shipping: {price: 0}, paymentInfo: 'card', totalSum: subTotal});
        })
    },[]);


    useEffect(() => {
        if (customerLoaded) {
            setFormData({
                ...formData,
                customer: {...customer},
                email: customer.email,
                deliveryInfo: {
                    firstName: customer.firstName,
                    lastName: customer.lastName,
                    telephone: customer.telephone
                },
            });
        };
        if (localStorage.getItem('deliveryInfoLocal')) {
            let localData = JSON.parse(localStorage.getItem('deliveryInfoLocal'))
            setFormData({
                ...formData,
                email: customerLoaded ? customer.email : formData.email || '',
                deliveryInfo: {...localData},
                shipping: shippingOptionsBase.filter(el => el.locations.some(elem => elem === localData.country))[0] || shippingOptionsBase.find(el => el._id === 'other'),
                totalSum: shippingOptionsBase.filter(el => el.locations.some(elem => elem === localData.country))[0] ? shippingOptionsBase.filter(el => el.locations.some(elem => elem === localData.country))[0].price + subTotal : shippingOptionsBase.find(el => el._id === 'other').price + subTotal
            })
        };
    }, [customerLoaded]);

    useEffect (() => {
        const validateInfoFields = () => {
            if (formData.email
                && formData.email.match(/^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+(?:[a-zA-Z]{2}|aero|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel)$/)
                && formData.deliveryInfo
                && formData.deliveryInfo.firstName
                && formData.deliveryInfo.lastName
                && formData.deliveryInfo.address
                && formData.deliveryInfo.city
                && formData.deliveryInfo.country
                && formData.deliveryInfo.postal
                && formData.deliveryInfo.telephone
                && formData.deliveryInfo.telephone.match(/^([\(\+])?([0-9]{1,3}([\s])?)?([\+|\(|\-|\)|\s])?([0-9]{2,4})([\-|\)|\.|\s]([\s])?)?([0-9]{2,4})?([\.|\-|\s])?([0-9]{2,8})?([\.|\-|\s])?([0-9]{2,8})$/)
                ) {
                return true;
            }
            return false;
        };
        const validateShippingFields = () => { // прописать проверку пустых и некорректных вводов
            return true;
        };
        validateInfoFields() ? setOnShippingAvailable(true) : setOnShippingAvailable(false);
        validateInfoFields() && validateShippingFields() ? setOnPaymentAvailable(true) : setOnPaymentAvailable(false);
        if(formData.shipping) {
            calcShipping(formData.shipping);
        };
        return ( () => {
            setOnShippingAvailable(false);
            setOnPaymentAvailable(false);
        })
    }, [formData])

    const handleOnChange = event => {
        if (['subscribe', 'saveLocal'].some(el => el === event.target.name)) {
            setFormData({
                ...formData,
                [event.target.name]: !formData[event.target.name]
            })
        } else if (['firstName', 'lastName', 'address', 'city', 'postal', 'telephone'].some(el => el === event.target.name)) {
            setFormData({
                ...formData,
                deliveryInfo: {
                    ...formData.deliveryInfo,
                    [event.target.name]: event.target.value
                }
            });
        } else {
            setFormData({
                ...formData,
                [event.target.name]: event.target.value
            });
        }
    };
    const handleOnChangeCountry = value => {
        setFormData({
            ...formData,
            deliveryInfo: {
                ...formData.deliveryInfo,
                country: value
            },
            shipping: shippingOptionsBase.filter(el => el.locations.some(elem => elem === value))[0] || shippingOptionsBase.find(el => el._id === 'other'),
            totalSum: shippingOptionsBase.filter(el => el.locations.some(elem => elem === value))[0] ? shippingOptionsBase.filter(el => el.locations.some(elem => elem === value))[0].price + subTotal : shippingOptionsBase.find(el => el._id === 'other').price + subTotal,
        });
    };

    const handleOnSaveLocalDeliveryInfo = () => {
        formData.saveLocal ? localStorage.setItem('deliveryInfoLocal', JSON.stringify({...formData.deliveryInfo})) : localStorage.removeItem('deliveryInfoLocal');
    };

        const handleOnChangeShipping = shipping => {
            setFormData({
                ...formData,
                shipping: shipping,
                totalSum: shipping.price + subTotal
            });
        };

        const handleOnChangePayment = paymentInfo => {
            setFormData({
                ...formData,
                paymentInfo: paymentInfo
            });
        };

    const onToCart = () => {
        handleOnSaveLocalDeliveryInfo();
        history.push('/cart');
    };

    const onToInfo = () => {
        setInfoIsOpen(true);
        setShippingIsOpen(false);
        setPaymentIsOpen(false);
    };

    const onToShipping = () => {
        handleOnSaveLocalDeliveryInfo();
        setInfoIsOpen(false);
        setShippingIsOpen(true);
        setPaymentIsOpen(false);
    };

    const onToPayment = () => {
        setInfoIsOpen(false);
        setShippingIsOpen(false);
        setPaymentIsOpen(true);
        setOnCompleteAvailable(true);
    };

    const onToComplete = async () => {
        setInfoIsOpen(false);
        setShippingIsOpen(false);
        setPaymentIsOpen(false);
        dispatch(ordersActions.getOrderItem(formData));
        history.push('/payment');
    };

    console.log(formData);
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb" className={classes.breadcrumb}>
                <Box className={classes.breadcrumbLink} onClick={onToCart}>Cart</Box>
                {infoIsOpen ?
                    <Box fontSize='body2.fontSize' className={classes.breadcrumbActive}>Information</Box> :
                    <Box className={classes.breadcrumbLink} onClick={onToInfo}>Information</Box>
                }
                {shippingIsOpen ?
                    <Box fontSize='body2.fontSize' className={classes.breadcrumbActive}>Shipping</Box> :
                    onShipppingAvailable ?
                        <Box className={classes.breadcrumbLink} onClick={onToShipping}>Shipping</Box> :
                        <Box className={classes.breadcrumbLocked}>Shipping</Box>
                }
                {paymentIsOpen ?
                    <Box fontSize='body2.fontSize' className={classes.breadcrumbActive}>Payment</Box> :
                    onPaymentAvailable ?
                        <Box className={classes.breadcrumbLink} onClick={onToPayment}>Payment</Box> :
                        <Box className={classes.breadcrumbLocked}>Payment</Box>
                }
            </Breadcrumbs>
            <CheckoutInfo
                formData={formData}
                infoIsOpen={infoIsOpen}
                handleOnChange={handleOnChange}
                handleOnChangeCountry={handleOnChangeCountry}
                onToCart={onToCart}
                onToInfo={onToInfo}
                onToShipping={onToShipping}
                onShipppingAvailable={onShipppingAvailable}
            />
            <CheckoutShipping
                formData={formData}
                infoIsOpen={infoIsOpen}
                shippingIsOpen={shippingIsOpen}
                handleOnChangeShipping={handleOnChangeShipping}
                onToInfo={onToInfo}
                onToShipping={onToShipping}
                onToPayment={onToPayment}
                onPaymentAvailable={onPaymentAvailable}
            />
            <CheckoutPayment
                formData={formData}
                infoIsOpen={infoIsOpen}
                shippingIsOpen={shippingIsOpen}
                paymentIsOpen={paymentIsOpen}
                handleOnChangePayment={handleOnChangePayment}
                onToShipping={onToShipping}
                onToPayment={onToPayment}
                onToComplete={onToComplete}
                onCompleteAvailable={onCompleteAvailable}
            />
        </div>
    )
};
