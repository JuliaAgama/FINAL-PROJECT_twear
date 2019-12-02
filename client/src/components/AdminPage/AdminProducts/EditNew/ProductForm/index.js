import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

import { Typography, Box, Button, Grid, TextField, FormLabel, FormControlLabel, FormControl, FormGroup, Radio, RadioGroup, Checkbox } from '@material-ui/core';

import useStyles from './useStyles';


import UploadFile from '../../../../common/inputs/UploadFile';

export default props => {

    const { productName, item, topCatsBase, categoriesBase, gendersBase, colorsBase, sizeTypesBase, sizesBase, onSubmitHandler} = props;

    let [formData, setFormData] = useState({});

    useEffect(()=> {
        if(productName && item) {
            let newProduct = productName && productName.includes('newProduct') ?
                productName.slice(productName.indexOf('-')+1) :
                undefined;
            item ?
                setFormData({
                    _id: item._id || '',
                    itemNo: item.itemNo || 0,
                    enabled: item.enabled || true,
                    name: item.name || '',
                    description: item.description || '',
                    price: item.price || 0,
                    previousPrice: item.previousPrice || 0,
                    categories: item.categories || [],
                    genders: item.genders || [],
                    colors: item.colors || [],
                    imgs: item.imgs  || [],
                    productUrl: item.productUrl || '',
                    brand: item.brand || '',
                    manufacturer: item.manufacturer || '',
                    manufacturerCountry: item.manufacturerCountry || '',
                    seller: item.seller || '',
                    date: item.date || Date.now()
                }) :
                setFormData({})
        }
    },[productName, item]);


    const onChange = event => {
    //     if (event.target.name === 'genders') {
    //         event.target.checked ?
    //             setFormData({
    //                 ...formData,
    //                 genders: formData.genders ? [...formData.genders.filter(el => el.gender !== event.target.value), {gender: event.target.value}] : [{gender: event.target.value}]
    //             }) :
    //             setFormData({
    //                 ...formData,
    //                 genders: [...formData.genders.filter(el => el.gender !== event.target.value)]
    //             })
    //     } else {
            setFormData({
                ...formData,
                [event.target.name]: event.target.value
            });
    //     }
    };

    const onSubmit = event => {
        event.preventDefault();
        onSubmitHandler(formData);
    };

    const cutName = (string, l) => string.length >= l ? string.slice(0, l-3)+'...' : string;

    const classes = useStyles();

    return (
        <Typography component="div" variant="body1" className={classes.wrapper}>
            <form autoComplete="off">
                <Grid container className={classes.paper}>
                    <Grid item xs={4}>
                        <TextField
                            required
                            id="outlined-required"
                            label="itemNo"
                            name='itemNo'
                            placeholder={`${Math.ceil(Math.random()*1000)}-${Math.ceil(Math.random()*100)}-${Math.ceil(Math.random()*10)}`}
                            value={formData.itemNo ? formData.itemNo : ''}
                            onChange={onChange}
                            onFocus={onChange}
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item className={classes.justify}>
                        <TextField
                            required
                            id="outlined-required"
                            label="Product"
                            name='name'
                            autoFocus
                            onChange={onChange}
                            defaultValue={productName && productName.includes('newProduct') ? '' : productName}
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                        />
                    </Grid>
                </Grid>

                <div>
                    <Grid container className={classes.paper}>
                        <Grid item xs={6}>
                            Choose top Category
                        </Grid>
                        <Grid item xs={6}>
                            Choose Category
                        </Grid>
                        <Grid item xs={6}>
                            Choose Genders
                        </Grid>
                        <Grid item xs={6}>
                            Choose Colors
                        </Grid>
                        <Grid item xs={6}>
                            Choose Appropriate Set of Sizes (SizeType)
                        </Grid>
                    </Grid>
                </div>

                <Grid container className={classes.paper}>
                    <Grid item xs={12}>
                        <UploadFile/>
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                        fullWidth={true}
                        variant="outlined"
                        className={classes.btn}
                        onClick={onSubmit}
                        > {`SAVE`}</Button>
                    </Grid>
                </Grid>
            </form>
            {item && item.name ?  <Link to={`/admin/products`+item.name} className={classes.link}> {`<<   to ${cutName(item.name, 10)} page`} </Link> : <></>
            }
        </Typography>
    )
};
