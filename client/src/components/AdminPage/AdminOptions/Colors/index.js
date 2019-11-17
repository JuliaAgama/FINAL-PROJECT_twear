// import React from 'react';
import React, { useState, useEffect, useRef} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as colorsActions from '../../../../store/actions/colors';

import Grid from '@material-ui/core/Grid';
import useStyles from './useStyles';

import Notification from '../../../common/messages/Notification';
import AddButton from '../../../common/buttons/Add';
import Spinner from '../../../common/Spinner';

import ColorItem from './ColorItem';


export default props => {

    const classes = useStyles();
    const dispatch = useDispatch();

    // const colorsList = useSelector(state => state.colors.colors);
    const colorsRecieved = useSelector(state => state.colors.colors);
    const [colorsList, setColorsList] = useState([]);
    // const [listUpdated, setListUpdated] = useState(colorsList);
    const colorsLoaded = useSelector(state => state.colors.loaded);

    useEffect(() => {
        colorsActions.getAllColors()(dispatch);
    }, [dispatch]);

    useEffect(() => {
        setColorsList(colorsRecieved);
    }, [colorsRecieved]);


    const ref = useRef(null);
    const timeout = 2000;


    // const reRender = id => setColorsList(colorsList.filter(el => el._id !== id));
    const reRender = id => {console.log(id); setColorsList(colorsList.filter(el => el._id !== id))};

    const addItem = event => {
        event.preventDefault();
        console.log('hello');
    };

    console.log('colorList recieved from dataBase: ', colorsList);

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
                                    reRender={reRender}
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
        </>
    )
};
