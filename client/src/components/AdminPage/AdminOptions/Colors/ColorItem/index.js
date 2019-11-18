import React, {useState, useEffect, useRef} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as colorsActions from '../../../../../store/actions/colors';
import * as productsActions from '../../../../../store/actions/products';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import useStyles from './useStyles';

import SaveButton from '../../../../common/buttons/Save';
import DeleteButton from '../../../../common/buttons/Delete';
// import WarningModal from '../../../../common/messages/WarningModal';
// import ConfirmModal from '../../../../common/messages/ConfirmModal';


export default props => {
    const classes = useStyles();
    const {item, handleNotification} = props;

    const dispatch = useDispatch();

    // useEffect(() => {
    //     productsActions.getProductsBySearch(item._id)(dispatch);
    // }, [dispatch]);

    // const productsBySearch = useSelector(state => state.products.products);


    const [color, setColor] = useState(item.cssValue);
    const [formData, setFormData] = useState({});

    useEffect(()=> {
        setFormData(item);
    },[item]);

    const onChange = event => {
        if (event.target.name === 'cssValue') {
            setColor(event.target.value);
        };
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const saveColor = event => {
        event.preventDefault();
        colorsActions.updateColor(formData)(dispatch);
        handleNotification((formData.name || item.name), 'saved in database');
    };

    const checkToDelete = event => {
        event.preventDefault();
        console.log('checkToDelete');
    };

    const deleteColor = event => {
        event.preventDefault();
        colorsActions.deleteColor(formData)(dispatch);
        handleNotification((formData.name || item.name), 'deleted from database');
        // setFormData(null);

        console.log('delete color');
    };

    //     console.log('colorBase recieved from dataBase: ', colorsBase);
    //     console.log('formData current: ', formData);


    return (
        <>
        <Grid item xs={6} lg={4} xl={3} className={classes.wrapper}>
            <form autoComplete="off">
                <Grid container className={classes.verticalCenter}>
                    <Grid item xs={1}>
                        <input
                            className={classes.colorInput}
                            id={item._id}
                            type="color"
                            name={'cssValue'}
                            value={color}
                            onChange={onChange}
                        />
                    </Grid>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={3}>
                        <TextField
                            className={classes.textField}
                            required
                            id={item._id}
                            name={'name'}
                            onChange={onChange}
                            defaultValue={item.name}
                            margin="normal"
                        />
                    </Grid>
                    <Grid item xs={1}>
                        <SaveButton
                            onClick={saveColor}
                            size="small"
                            className={formData.name === item.name && formData.cssValue === item.cssValue ? '' : 'fabGreenFilled' }/>
                    </Grid>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={1}>
                        <DeleteButton
                            onClick={checkToDelete}
                            size="small"/>
                    </Grid>
                    <Grid item xs={3}></Grid>
                </Grid>
            </form>
        </Grid>
        </>
    )
}
