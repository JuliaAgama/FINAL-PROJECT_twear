import React, {useState, useEffect} from 'react';
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

    const [newSizeType, setNewSizeType] = useState(null);

    useEffect(() => {
        setNewSizeType(null);
    }, [sizeTypesList]);

    const addItem = event => {
        event.preventDefault();
        setNewSizeType ({name: ''});
    };

    const classes = useStyles();

    return (
        <>
        {
            sizeTypesLoaded ?
            (
                <div className={classes.wrapper}>
                <Grid container>
                    {newSizeType ?
                        (
                            <SizeTypeItem
                                    item={newSizeType}
                                    key={Math.random()}
                                    handleNotification={handleNotification}
                                />
                        ) :
                    <Grid item xs={12} className={classes.wrapper}>
                        <AddWideButton  text='CREATE NEW SET OF SIZES' color='secondary' onClick={addItem}/>
                    </Grid>
                    }
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
