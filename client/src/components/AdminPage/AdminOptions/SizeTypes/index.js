import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';

import { Grid, Box, Tooltip } from '@material-ui/core';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';

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

    const cancelAdding = event => {
        event.preventDefault();
        setNewSizeType(null);
    };

    const classes = useStyles();

    return (
        <>
        {
            sizeTypesLoaded ?
            (
                <>
                    {newSizeType ?
                    <>
                        <Tooltip title="Cancel adding" >
                            <CancelOutlinedIcon aria-label="cancel" className={classes.cancelBtn} onClick={cancelAdding}/>
                        </Tooltip>
                        <SizeTypeItem
                            item={newSizeType}
                            key={Math.random()}
                            handleNotification={handleNotification}
                        />
                    </> :
                        <Grid item className={classes.container}>
                            <Box>
                                <AddWideButton text='NEW SET OF SIZES' color='secondary' onClick={addItem}/>
                            </Box>
                        </Grid>
                    }
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
                </>
            ) :
            <Spinner/>
        }
        </>
    )
};
