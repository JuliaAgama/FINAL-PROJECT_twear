import React, { useState, useEffect, useRef} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as sizesActions from '../../../../../../store/actions/sizes';

import Grid from '@material-ui/core/Grid';
import useStyles from './useStyles';

import ErrorModal from '../../../../../common/messages/ErrorModal';
import Notification from '../../../../../common/messages/Notification';
import AddButton from '../../../../../common/buttons/Add';
import Spinner from '../../../../../common/Spinner';

import SizeItem from './SizeItem';


export default props => {

    const {sizeTypeId} = props;
    // const {rerender, setRerender} = useState(false);
    // const doRerender = (toggle) => setRerender(toggle);

    const dispatch = useDispatch();
    useEffect(() => {
        sizesActions.getAllSizes()(dispatch);
    }, [dispatch]);

    const getUpdatedSizesList = () => {
        sizesActions.getAllSizes()(dispatch);
    };

    const sizesList = useSelector(state => state.sizes.sizes);
    const sizesLoaded = useSelector(state => state.sizes.loaded);

    //server errors catching:
    const sizesError = useSelector(state => state.sizes.error);
    const [errorIsOpen, setErrorIsOpen] = useState(false);
    useEffect(() => {
        if(sizesError) {setErrorIsOpen(true)}
    },[sizesError]
    );
    const errorModalText = {
        title: `NO RESPONSE FROM SERVER`,
        description: `Request to server failed`,
        button: 'TRY AGAIN'
    };
    const reloadPage = () => window.location.reload(true);
    const closeErrorModal = () => setErrorIsOpen(false);

    // notification after saving or deleting item:
    const ref = useRef(null);
    const timeout = 2000;
    const handleNotification = (itemName, actionDescription) => {
        ref.current(`Size ${itemName.toUpperCase()} has been ${actionDescription}.`);
    };

    const addItem = event => {
        event.preventDefault();
        console.log('hello');
    };

    const classes = useStyles();

    return (
        <>
        {
            sizesLoaded ?
            (
                <div className={classes.wrapper}>
                    <Grid container className={classes.paper}>
                        {sizesList
                            .map(item => item.sizeType === sizeTypeId ?
                                <SizeItem
                                    item={item}
                                    key={item._id}
                                    handleNotification={handleNotification}
                                    getUpdatedSizesList={getUpdatedSizesList}
                                /> :
                                <div key={Math.random()}></div>
                                )
                        }
                        <Grid item xs={12} className={classes.center}>
                            <Grid container>
                                <Grid item xs={3}>
                                    <AddButton
                                        className='fabPink'
                                        onClick={addItem}
                                        size="small"/>
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
        </>
    )
};
