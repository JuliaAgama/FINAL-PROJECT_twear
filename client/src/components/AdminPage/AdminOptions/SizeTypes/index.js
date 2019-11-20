import React, { useState, useEffect, useRef} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SizeTypesApi from '../../../../services/SizeTypes';
import * as sizeTypesActions from '../../../../store/actions/sizeTypes';

import Grid from '@material-ui/core/Grid';
import useStyles from './useStyles';

import ErrorModal from '../../../common/messages/ErrorModal';
import Notification from '../../../common/messages/Notification';
import AddButton from '../../../common/buttons/Add';
import Spinner from '../../../common/Spinner';

import SizeTypeItem from './SizeTypeItem';


export default props => {

    const dispatch = useDispatch();
    useEffect(() => {
        sizeTypesActions.getAllSizeTypes()(dispatch);
    }, [dispatch]);

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
    const reloadPage = () => window.location.reload(true);
    const closeErrorModal = () => setErrorIsOpen(false);

    // notification after saving or deleting item:
    const ref = useRef(null);
    const timeout = 2000;
    const handleNotification = (itemName, actionDescription) => {
        ref.current(`Category ${itemName.toUpperCase()} has been ${actionDescription}.`);
        // setTimeout(() => {
            // window.location.reload(true)
        // }, timeout)
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
                    <Grid container className={classes.paper}>
                        {sizeTypesList
                            .map(item =>
                                <SizeTypeItem
                                    item={item}
                                    key={item._id}
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
        </>
    )
};
