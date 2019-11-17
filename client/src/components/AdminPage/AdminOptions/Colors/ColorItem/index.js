import React, {useState, useEffect, useRef} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as colorsActions from '../../../../../store/actions/colors';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import useStyles from './useStyles';

import SaveButton from '../../../../common/buttons/Save';
import DeleteButton from '../../../../common/buttons/Delete';
import Notification from '../../../../common/messages/Notification';


export default props => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const {item, reRender} = props;

    const [color, setColor] = useState(item.cssValue);
    const [formData, setFormData] = useState({});

    useEffect(()=> {
        setFormData(item);
    },[item]);


    const ref = useRef(null);
    const timeout = 2000;


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
        ref.current(`Color ${formData.name.toUpperCase()} has been saved!`);
    };

    const deleteColor = event => {
        event.preventDefault();
        colorsActions.deleteColor(formData)(dispatch);
        reRender(item._id);

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
                            onClick={deleteColor}
                            size="small"/>
                    </Grid>
                    <Grid item xs={3}></Grid>
                </Grid>
            </form>
        </Grid>

        <Notification timeout={timeout} children={add => (ref.current = add)} />
        </>
    )
}
