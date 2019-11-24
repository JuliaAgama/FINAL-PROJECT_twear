import React from 'react';
import { useSelector } from 'react-redux';

import Grid from '@material-ui/core/Grid';
import useStyles from './useStyles';

import AddWideButton from '../../../common/buttons/AddWide';
import Spinner from '../../../common/Spinner';
import SizeTypeItem from './SizeTypeItem';


export default props => {

    const {handleNotification} = props;

    const sizeTypesList = useSelector(state => state.sizeTypes.sizeTypes);
    const sizeTypesLoaded = useSelector(state => state.sizeTypes.loaded);

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
                                />
                                )
                        }
                    </Grid>
                </div>
            ) :
            <Spinner/>
        }
        </>
    )
};
