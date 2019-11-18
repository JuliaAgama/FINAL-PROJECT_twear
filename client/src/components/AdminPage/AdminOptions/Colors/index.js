// import React from 'react';
import React, { useState, useEffect, useRef} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ColorsApi from '../../../../services/Colors';
import * as colorsActions from '../../../../store/actions/colors';
// import * as productsActions from '../../../../store/actions/products';

import Grid from '@material-ui/core/Grid';
import useStyles from './useStyles';

import ErrorModal from '../../../common/messages/ErrorModal';
import Notification from '../../../common/messages/Notification';
import AddButton from '../../../common/buttons/Add';
import Spinner from '../../../common/Spinner';

import ColorItem from './ColorItem';


export default props => {

    const dispatch = useDispatch();
    useEffect(() => {
        // (new ColorsApi()).getColors().then(res => console.log(res));
        colorsActions.getAllColors()(dispatch);
    }, [dispatch]);
    // }, []);

    const colorsList = useSelector(state => state.colors.colors);
    const colorsLoaded = useSelector(state => state.colors.loaded);

//server errors catching:
    const colorsError = useSelector(state => state.colors.error);
    const [errorIsOpen, setErrorIsOpen] = useState(false);
    useEffect(() => {
        if(colorsError) {setErrorIsOpen(true)}
    },[colorsError]
    );
    const errorModalText = {
        title: `NO RESPONSE FROM SERVER`,
        description: `Request to server failed`,
        button: 'TRY AGAIN'
    };
    const reloadPage = () => window.location.reload(true);
    const closeErrorModal = () => setErrorIsOpen(false);


    // safe Deletion handling:

    // const searchProductsByColor = (event, colorId) => {
    //     event.preventDefault();
    //     productsActions.getProductsBySearch(colorId)(dispatch);
    //     const productsBySearch = useSelector(state => state.products.products);
    //     console.log('this color connected to products: ', productsBySearch)
    // };




    // notification after saving or deleting item:
    const ref = useRef(null);
    const timeout = 2000;
    const handleNotification = (itemName, actionDescription) => {
        ref.current(`Category ${itemName.toUpperCase()} has been ${actionDescription}.`);
        setTimeout(() => {
            // window.location.reload(true)
        }, timeout)
    };

    // const reRender = id => setColorsList(colorsList.filter(el => el._id !== id));
    // const reRender = id => {console.log(id); setColorsList(colorsList.filter(el => el._id !== id))};

    const addItem = event => {
        event.preventDefault();
        console.log('hello');
    };

    const classes = useStyles();

    // console.log('colorList recieved from dataBase: ', colorsList);

    return (
        <>
        {
            colorsLoaded ?
            (
                <div className={classes.wrapper}>
                    <Grid container className={classes.paper}>
                        {colorsList
                            .map(item =>
                                <ColorItem
                                    item={item}
                                    key={item._id}
                                    //searchProductsByColor={searchProductsByColor}
                                    handleNotification={handleNotification}
                                    //reRender={reRender}
                                />
                                )
                        }
                        <Grid item xs={6} lg={4} xl={3} className={classes.center}>
                            <Grid container>
                                <Grid item xs={3}>
                                    <AddButton
                                        className='fabPink'
                                        onClick={addItem}
                                        size="medium"/>
                                </Grid>
                                <Grid item xs={9}></Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            ) :
            <Spinner/>

        }
        <Notification timeout={timeout} children={add => (ref.current = add)} />
        <ErrorModal modalIsOpen={errorIsOpen} modalText={errorModalText} doFunction={reloadPage} closeFunction={closeErrorModal}/>
        {/* <WarningModal modalIsOpen={warningIsOpen} modalText={warningModalText} doFunction={doFunction} closeFunction={closeWarningModal}/>
        <ConfirmModal modalIsOpen={confirmIsOpen} modalText={confirmModalText} doFunction={doFunction} closeFunction={closeConfirmModal}/> */}
        </>
    )
};
