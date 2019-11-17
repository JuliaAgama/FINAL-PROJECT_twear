// import React from 'react';
import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as colorsActions from '../../../../store/actions/colors';

import Grid from '@material-ui/core/Grid';
import useStyles from './useStyles';

import TextField from '@material-ui/core/TextField';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Radio from '@material-ui/core/Radio';
// import RadioGroup from '@material-ui/core/RadioGroup';
import FormGroup from '@material-ui/core/FormGroup';
import FormControl from '@material-ui/core/FormControl';
import Checkbox from '@material-ui/core/Checkbox';

import AddWideButton from '../../../common/buttons/AddWide';


export default props => {
    const classes = useStyles();

    const dispatch = useDispatch();
    const colorsBase = useSelector(state => state.colors.colors);

    useEffect(() => {
        colorsActions.getAllColors()(dispatch);
    }, [dispatch]);

    console.log(colorsBase);

    let [formData, setFormData] = useState({});
    const [color, setColor] = useState('#333333');
    const handleColorChange = event => {
        setColor(event.target.value);
    };


    // useEffect(()=> {
    //             setFormData({
    //                 _id: item._id || '',
    //                 itemNo: item.itemNo || 0,
    //                 name: item.name || '',
    //                 topCategory: item.topCategory,
    //                 genders: [...item.genders],
    //                 img: item.img || '',
    //                 date: item.date || Date.now()
    //             });
    //     }
    // },[item]);

    const onChange = event => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    // const onSubmit = event => {
    //     event.preventDefault();
    //     onSubmitHandler(formData);
    // };

    // console.log(formData);
    return (
        <>
            <div className={classes.wrapper}>
                <form
                    autoComplete="off"
                    //onSubmit={onSubmit}
                >
                <Grid container className={classes.paper}>
                    {colorsBase.map(color =>
                        <Grid item xs={6} md={4} lg={3} xl={2} key={color._id}>
                            <fieldset>
                                <Grid container className={classes.verticalCenter}>
                                    <Grid item xs={3}>
                                        {/* <label htmlFor="color">change </label> */}
                                        <input
                                            id={color._id}
                                            type="color"
                                            value={color.cssValue}
                                            onChange={handleColorChange}
                                        />
                                    </Grid>
                                    <Grid item xs={7}>
                                        <TextField
                                            className={classes.textField}
                                            required
                                            id={color._id}
                                            //label="name"
                                            name={color._id}
                                            onChange={onChange}
                                            defaultValue={color.name}
                                            margin="normal"
                                        // variant="outlined"
                                        />
                                    </Grid>
                                    <Grid item xs={2}></Grid>
                                </Grid>
                            </fieldset>

                        </Grid>
                    )}
                </Grid>

                    <AddWideButton text='' color='primary'/>
                    <button className="btn btn-info btn-block" type="submit">Save changes</button>
                </form>
            </div>
        </>
    )
}
