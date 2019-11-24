import React from 'react';
import { useSelector } from 'react-redux';

import Grid from '@material-ui/core/Grid';
import useStyles from './useStyles';

import AddButton from '../../../../../common/buttons/Add';
import Spinner from '../../../../../common/Spinner';
import SizeItem from './SizeItem';


export default props => {

    const {handleNotification, sizeTypeId} = props;

    const sizesList = useSelector(state => state.sizes.sizes);
    const sizesLoaded = useSelector(state => state.sizes.loaded);

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
                                /> :
                                <div key={Math.random()}></div>
                                )
                        }
                        <Grid item xs={12} className={classes.center}>
                            <Grid container>
                                <Grid item xs={8}></Grid>
                                <Grid item xs={2}>
                                    <AddButton
                                        className='fabPink'
                                        onClick={addItem}
                                        size="small"/>
                                </Grid>
                                <Grid item xs={2}></Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            ) :
            <Spinner/>
        }
        </>
    )
};
