import React, { useState, useEffect, useRef} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as sizeTypesActions from '../../../../store/actions/sizeTypes';

import Grid from '@material-ui/core/Grid';
import useStyles from './useStyles';

import ErrorModal from '../../../common/messages/ErrorModal';
import Notification from '../../../common/messages/Notification';
import AddWideButton from '../../../common/buttons/AddWide';
import Spinner from '../../../common/Spinner';

import SizeTypeItem from './SizeTypeItem';


export default () => {

    const dispatch = useDispatch();
    useEffect(() => {
        const abortController = new AbortController();
        sizeTypesActions.getAllSizeTypes()(dispatch);

        return function cleanup() {
            abortController.abort();
        };
    }, [dispatch]);

    const getSizeTypesList = () => {
        sizeTypesActions.getAllSizeTypes()(dispatch);
    };

    const sizeTypesList = useSelector(state => state.sizeTypes.sizeTypes);
    const sizeTypesLoaded = useSelector(state => state.sizeTypes.loaded);

    //server errors catching:
    const sizeTypesError = useSelector(state => state.sizeTypes.error);
    const [errorIsOpen, setErrorIsOpen] = useState(false);
    useEffect(() => {
        if(sizeTypesError) {setErrorIsOpen(true)}
    },[sizeTypesError]
    );
    const errorModalText = {
        title: `NO RESPONSE FROM SERVER`,
        description: `Request to server failed`,
        button: 'TRY AGAIN'
    };
    const closeErrorModal = () => setErrorIsOpen(false);

    // notification after saving or deleting item:
    const ref = useRef(null);
    const timeout = 2000;
    const handleNotification = (itemName, actionDescription) => {
        ref.current(`Size Type ${itemName.toUpperCase()} has been ${actionDescription}.`);
    };

    const addItem = event => {
        event.preventDefault();
        console.log('hello');
    };

    const classes = useStyles();

    return (
        <>
        {
            sizeTypesLoaded ?
            (
                <div className={classes.wrapper}>
                <Grid container>
                    <Grid item xs={12} className={classes.wrapper}>
                        <AddWideButton  text='CREATE NEW SIZE TYPE' color='secondary' onClick={addItem}/>
                    </Grid>
                </Grid>
                    <Grid container className={classes.paper}>
                        {sizeTypesList
                            .map(item =>
                                <SizeTypeItem
                                    item={item}
                                    key={item._id}
                                    handleNotification={handleNotification}
                                    getSizeTypesList={getSizeTypesList}
                                />
                                )
                        }
                        {/* <Grid item xs={6} lg={4} xl={3} className={classes.center}>
                            <Grid container>
                                <Grid item xs={3}>
                                    <AddButton
                                        className='fabPink'
                                        onClick={addItem}
                                        size="medium"/>
                                </Grid>
                                <Grid item xs={9}></Grid>
                            </Grid>
                        </Grid> */}
                    </Grid>
                </div>
            ) :
            <Spinner/>

        }
        <Notification timeout={timeout} children={add => (ref.current = add)} />
        <ErrorModal modalIsOpen={errorIsOpen} modalText={errorModalText} doFunction={getSizeTypesList} closeFunction={closeErrorModal}/>
        </>
    )
};
