import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';

import Grid from '@material-ui/core/Grid';
import useStyles from './useStyles';

import AddButton from '../../../common/buttons/Add';
import Spinner from '../../../common/Spinner';

import ColorItem from './ColorItem';


export default props => {

    const {handleNotification} = props;

    const colorsList = useSelector(state => state.colors.colors);
    const colorsLoaded = useSelector(state => state.colors.loaded);

    const [newColor, setNewColor] = useState(null);

    useEffect(() => {
        setNewColor(null);
    }, [colorsList]);

    const addItem = event => {
        event.preventDefault();
        setNewColor ({name: '', cssValue: '#eeeeee'});
    };

    const classes = useStyles();

    return (
        <>
        {
            colorsLoaded  ?
            (
                <div className={classes.wrapper}>
                    <Grid container className={classes.paper} id='colors-container'>
                        {colorsList.map(item =>
                            <ColorItem
                                item={item}
                                key={item._id}
                                handleNotification={handleNotification}
                            />
                            )
                        }
                        {newColor ?
                        (
                            <ColorItem
                                    item={newColor}
                                    key={Math.random()}
                                    handleNotification={handleNotification}
                                />
                        ) :
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
                        }
                    </Grid>
                </div>
            ) :
            <Spinner/>
        }
        </>
    )
};
