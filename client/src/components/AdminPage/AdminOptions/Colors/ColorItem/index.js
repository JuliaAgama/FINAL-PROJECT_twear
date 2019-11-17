// import React from 'react';
import React, {useState, useEffect} from 'react';
// import { useDispatch, useSelector } from 'react-redux';

// import * as colorsActions from '../../../../store/actions/colors';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import useStyles from './useStyles';

import SaveButton from '../../../common/buttons/Save';
import DeleteButton from '../../../common/buttons/Delete';


export default props => {
    const classes = useStyles();

    const {item} = props;

    // const dispatch = useDispatch();
    // const colorBase = useSelector(state => state.colors.colors);

    // useEffect(() => {
    //     colorsActions.getColor()(dispatch);
    // }, [dispatch]);

    // const [formData, setFormData] = useState([]);
    // useEffect(()=> {
    //     setFormData(colorsBase);
    // },[colorsBase]);

    // const [color, setColor] = useState('#333333');
    // const onChange = event => {
    //     setFormData(updatedData)
    // };



    // const addField = event => {
    //     event.preventDefault();
    //     console.log('hello');
    // };

    // // const onSubmit = event => {
    //     //     event.preventDefault();
    //     //     onSubmitHandler(formData);
    //     // };

    //     console.log('colorBase recieved from dataBase: ', colorsBase);
    //     console.log('formData current: ', formData);


    return (
        <>
        <Grid item xs={6} lg={4} xl={3}>
            <form
                autoComplete="off"
                //onSubmit={onSubmit}
            >
                <Grid container className={classes.verticalCenter}>
                    <Grid item xs={2}>
                        <input
                            className={classes.colorInput}
                            id={item._id}
                            type="color"
                            name={'cssValue'}
                            value={item.cssValue}
                            //onChange={onChange}
                        />
                    </Grid>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={5}>
                        <TextField
                            className={classes.textField}
                            required
                            id={item._id}
                            name={'name'}
                            //onChange={onChange}
                            defaultValue={item.name}
                            margin="normal"
                        />
                    </Grid>
                    <Grid item xs={1}>
                        <SaveButton
                            //onClick={addField}
                            size="small"/>
                    </Grid>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={1}>
                        <DeleteButton
                            //onClick={addField}
                            size="small"/>
                    </Grid>
                    <Grid item xs={1}></Grid>
                </Grid>
            </form>
        </Grid>
        </>
    )
}
