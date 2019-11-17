// import React from 'react';
import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as colorsActions from '../../../../store/actions/colors';

import Grid from '@material-ui/core/Grid';
import useStyles from './useStyles';

// import TextField from '@material-ui/core/TextField';
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

    // const{categoryName, topCatName, item, topCatsBase, gendersBase, displayAdditional, onSubmitHandler} = props;
    // console.log(item);
    // const specialCategory = 'looks';

    // let [formData, setFormData] = useState({});

    // useEffect(()=> {
    //     if(categoryName) {
    //         let newInTopCat = categoryName && categoryName.includes('newCategory') ?
    //             categoryName.slice(categoryName.indexOf('-')+1) :
    //             undefined;
    //         item ?
    //             setFormData({
    //                 _id: item._id || '',
    //                 itemNo: item.itemNo || 0,
    //                 name: item.name || '',
    //                 topCategory: item.topCategory,
    //                 genders: [...item.genders],
    //                 img: item.img || '',
    //                 date: item.date || Date.now()
    //             }) :
    //             setFormData({topCategory: newInTopCat})

    //     } else if (topCatName && item) {
    //             setFormData({
    //                 _id: item._id || '',
    //                 name: item.name || '',
    //                 img: item.img || '',
    //                 date: item.date || Date.now()
    //             });
    //     }
    // },[categoryName, topCatName, item]);

    // const onChange = event => {
    //     if (event.target.name === 'genders') {
    //         event.target.checked ?
    //             setFormData({
    //                 ...formData,
    //                 genders: formData.genders ? [...formData.genders.filter(el => el !== event.target.value), event.target.value] : [event.target.value]
    //             }) :
    //             setFormData({
    //                 ...formData,
    //                 genders: [...formData.genders.filter(el => el !== event.target.value)]
    //             })
    //     } else {
    //         setFormData({
    //             ...formData,
    //             [event.target.name]: event.target.value
    //         });
    //     }
    // };

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
                        <Grid item className={classes.justify}>
                            {/* <TextField
                                required
                                id="outlined-required"
                                label="Category"
                                name='name'
                                autoFocus
                                onChange={onChange}
                                defaultValue={topCatName === 'newTopCategory' || (categoryName && categoryName.includes('newCategory')) ? '' : topCatName || categoryName}
                                className={classes.textField}
                                margin="normal"
                                variant="outlined"
                            /> */}
                        </Grid>
                    </Grid>

                    <FormControl component="fieldset" className={classes.formControl}>
                        <FormLabel component="legend">Manage Colors</FormLabel>
                        <FormGroup>
                            <Grid container className={classes.paper}>
                                {colorsBase.map(color =>
                                    <Grid item xs={6} md={4} lg={3} xl={2} key={color._id}>
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    name='colors'
                                                    id={color._id}
                                                    value={color._id}
                                                    //checked={formData.colors && formData.colors.includes(color._id) ? true : false}
                                                    //onChange={onChange}
                                                />}
                                            label={color.name}
                                        />
                                    </Grid>
                                )}
                            </Grid>
                        </FormGroup>
                    </FormControl>
                    <AddWideButton text='' color='primary'/>
                    <button className="btn btn-info btn-block" type="submit">Save changes</button>
                </form>
            </div>
        </>
    )
}
