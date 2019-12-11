import React, {useState, useEffect, useRef} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

import * as colorsActions from '../../../../store/actions/colors';
import * as productsActions from '../../../../store/actions/products';

import { Typography, Box } from '@material-ui/core';

import useStyles from "./useStyles";

import ColorItem from './ColorItem';
import ErrorModal from '../../../common/messages/ErrorModal';
import WarningModal from '../../../common/messages/WarningModal';
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
    const getColorsList = () => {
        colorsActions.getAllColors()(dispatch);
    };

    useEffect(() => {
        getProductByItemNo();
        getColorsList();
        return () => {
            getProductByItemNo();
            getColorsList();
        }
    }, [dispatch]);


    const product = useSelector(state => state.productItem.productItem);
    const colorsBase = useSelector(state => state.colors.colors);

    const productLoaded = useSelector(state => state.productItem.loaded);
    const colorsLoaded = useSelector(state => state.colors.loaded);

    //server errors catching:
    const productError = useSelector(state => state.productItem.error);
    const colorsError = useSelector(state => state.colors.error);


    const [errorIsOpen, setErrorIsOpen] = useState(false);

    useEffect(() => {
        if(productError || colorsError) {setErrorIsOpen(true)}
    },[productError]
    );

    const errorModalText = {
        title: `NO RESPONSE FROM SERVER`,
        description: `Request to server failed`,
        button: 'TRY AGAIN'
    };
    const closeErrorModal = () => setErrorIsOpen(false);

    const onChangeColor = item => {
        console.log('color changed :', item.color.name);
    };


    const ref = useRef(null);
    const timeout = 2000;
    const handleNotification = item => {
        ref.current(`Product ${item.name.toUpperCase()} has been updated!`);
    };

    // handle warning:
    const [warningIsOpen, setWarningIsOpen] = useState(false);
    const [warningText, setWarningText] = useState({title: '', description: ''});
    const closeWarning =() => setWarningIsOpen(false);

    const checkMatching = smth => {
        if(smth) {
            setWarningIsOpen(true);
            setWarningText({title: 'Color cannot be deleted', description: `There are products of this color in database`});
            return true;
        }
        return false;
    };

    const onSubmit = event => {
        event.preventDefault();
        // onSubmitHandler(formData);
    };

    const cutName = (string, l) => string.length >= l ? string.slice(0, l-3)+'...' : string;

    const classes = useStyles();

    return (
        <Typography component="div" variant="body1">
        {productLoaded ?
            <Box color="secondary.main" p={3} borderBottom={1} textAlign="center" fontSize="h6.fontSize">
                <Box>Edit colors images</Box>
                <Box fontSize="body1.fontSize">{product.name.toUpperCase()}</Box>
            </Box> : <Spinner/>
        }
            <Box p={2}>
                {productLoaded && colorsLoaded ?
                    <Typography component="div" variant="body1" className={classes.wrapper}>
                        {product.colors && product.colors[0] ?
                            product.colors.map(item =>
                                <ColorItem
                                    key={item._id || Math.random()}
                                    item={item}
                                    colorsBase={colorsBase}
                                    onChangeColor={onChangeColor}
                                    handleNotification={handleNotification}
                                /> ) : <></>
                        }
                    </Typography> : <Spinner/>
                }
                {product && product.itemNo ?
                    <Link to={`/admin/products/`+product.itemNo} className={classes.linkGreen}> {`<<   to ${cutName(product.name, 10)} page`} </Link> : <></>
                }
                <Box/>
                <Link to={`/admin/products`} className={classes.linkPink}> {`<<   to Products List`} </Link>
            </Box>

            <WarningModal modalIsOpen={warningIsOpen} modalText={warningText} closeFunction={closeWarning}/>
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
