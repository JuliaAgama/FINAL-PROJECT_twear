import React, {useState, useEffect} from 'react';

import { Box, Button, Grid, TextField, FormLabel, FormControlLabel, FormControl, FormGroup, Radio, RadioGroup, Checkbox, OutlinedInput, InputAdornment, InputLabel } from '@material-ui/core';

import useStyles from './useStyles';

import ColorItem from './ColorItem';
import Selector from '../../../../common/inputs/Selector';
import UploadFile from '../../../../common/inputs/UploadFile';


export default props => {

    const { itemNo, item, topCatsBase, categoriesBase, gendersBase, sizeTypesBase, colorsBase, onSubmitHandler} = props;

    const [formData, setFormData] = useState({});
    const [selectedTopCat, setSelectedTopCat] = useState({_id: ''});
    const [categoriesDisplay, setCategoriesDisplay] = useState([]);
    const [sizeTypeLocked, setSizeTypeLocked] = useState(false);

    const checkSizeType = id => (
        item && item.colors && item.colors.some(el =>
            el.sizes && el.sizes.some(el => parseInt(el.quantity) > 0 && el.size.sizeType === id)
        ) ?
        true : false
    );

    useEffect(()=> {
        if (item && itemNo !== 'newProduct') {
            setFormData(item);
            setSelectedTopCat(topCatsBase.find(el => el._id === item.categories[0].category.topCategory));
            item.sizeType && checkSizeType(item.sizeType._id) ?
            setSizeTypeLocked(true) : setSizeTypeLocked(false);
        }
    },[item, itemNo]);

    useEffect(()=> {
        setCategoriesDisplay(categoriesBase.filter(el => el.topCategory._id === selectedTopCat._id));
    },[selectedTopCat]);

    const onChangeTopCat = id => {
        id && id !== '' ? setSelectedTopCat(topCatsBase.find(el => el._id === id)) : setSelectedTopCat({_id: ''});
        setFormData({
            ...formData,
            categories: []
        });
    };

    const onChange = event => {

        if (event.target.name === 'categories') {
            event.target.checked ?
            setFormData({
                ...formData,
                categories: formData.categories ?
                [...formData.categories.filter(el => el && el.category && el.category._id !== event.target.value), {category: categoriesBase.find(item => item._id === event.target.id)}] :
                [{category: categoriesBase.find(item => item._id === event.target.id)}]
            }) :
            setFormData({
                ...formData,
                categories: [...formData.categories.filter(el => el && el.category && el.category._id !== event.target.id)]
            })

        } else if (event.target.name === 'gender') {
            setFormData({
                ...formData,
                gender: gendersBase.find(el => el._id === event.target.value)
            });

        } else if (event.target.name === 'sizeType') {
            if (sizeTypeLocked === false) {
                setFormData({
                    ...formData,
                    sizeType: sizeTypesBase.find(el => el._id === event.target.value)
                });
            }

        } else if (event.target.name === 'colors') {
                event.target.checked ?
                setFormData({
                    ...formData,
                    colors: formData.colors ?
                    [...formData.colors.filter(el => el && el.color && el.color._id !== event.target.value), {color: colorsBase.find(item => item._id === event.target.id)}] :
                    [{color: colorsBase.find(item => item._id === event.target.id)}]
                }) :
                setFormData({
                    ...formData,
                    colors: [...formData.colors.filter(el => el && el.color && el.color._id !== event.target.id)]
                })

        } else if (event.target.name.includes('imgs')) {
            if(formData.imgs ) {
                let changedUrl =  formData.imgs.splice(parseInt(event.target.name), 1, event.target.value);
                setFormData({
                    ...formData
                });
            } else {
                setFormData({
                    ...formData,
                    imgs: [event.target.value]
                });
            }

        } else {
            setFormData({
                ...formData,
                [event.target.name]: event.target.value
            });
        }
    };

    const onSubmit = event => {
        event.preventDefault();
        onSubmitHandler(formData);
    };

    const classes = useStyles();

    return (
        <form autoComplete="off">
            <Grid container className={classes.paper}>
                <Grid item xs={5} sm={3}>
                    <TextField
                        required
                        id="product-itemNo"
                        label="itemNo"
                        name='itemNo'
                        placeholder={`${Math.ceil(Math.random()*1000)}-${Math.ceil(Math.random()*100)}-${Math.ceil(Math.random()*10)}`}
                        defaultValue={itemNo && itemNo.includes('newProduct') ? '' : itemNo}
                        onChange={onChange}
                        onFocus={onChange}
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12} sm={8}>
                    <TextField
                        required
                        id="product-name"
                        label="Name"
                        name='name'
                        autoFocus
                        onChange={onChange}
                        value={formData.name ? formData.name : ''}
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                    />
                </Grid>
            </Grid>

            <Grid item xs={12} container>
                <Grid item xs={6}  className={classes.input}>
                    <Box pt={2} pb={1}>Select Categories: </Box>
                </Grid>
                <Grid item xs={6}  className={classes.input}>
                    <Selector
                        selectorName='Top Category'
                        selectorArr={topCatsBase}
                        selectedItem={selectedTopCat._id}
                        onChange={onChangeTopCat}
                    />
                </Grid>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormGroup>
                        <Grid container>
                        {categoriesDisplay.map(item =>
                            <Grid item xs={6} lg={4}
                                className={classes.input}
                                key={item._id}
                            >
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            name='categories'
                                            id={item._id}
                                            value={item._id}
                                            checked={formData.categories && formData.categories.some(el => el.category._id === item._id) ? true : false}
                                            onChange={onChange}
                                        />}
                                    label={item.name}
                                />
                            </Grid>
                        )}
                        </Grid>
                    </FormGroup>
                </FormControl>
            </Grid>

            <Grid item xs={12} container>
                <Grid item xs={12}>
                    <TextField
                        id="product-description"
                        label="Description"
                        multiline
                        rowsMax='5'
                        name='description'
                        onChange={onChange}
                        value={formData.description ? formData.description : ''}
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={5} sm={3}>
                    <FormControl variant="outlined">
                        <InputLabel htmlFor="price">Price</InputLabel>
                        <OutlinedInput
                            id="product-price"
                            name="price"
                            type="number"
                            value={formData.price ? parseFloat(formData.price) : ''}
                            onChange={onChange}
                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                            labelWidth={60}
                        />
                    </FormControl>
                </Grid>
            </Grid>

            <Grid item xs={12} container>
                <Grid item xs={6}>
                    <FormControl component="fieldset" className={classes.formControl}>
                        <FormLabel component="legend">Gender:</FormLabel>
                            <RadioGroup aria-label="genders" name="gender">
                            {gendersBase.map(gender =>
                                <FormControlLabel
                                    key={gender._id}
                                    id={gender._id}
                                    value={gender._id}
                                    control={<Radio />}
                                    label={gender.name}
                                    checked={formData.gender && formData.gender._id === gender._id ? true : false}
                                    onChange={onChange}
                                />
                            )}
                            </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <FormControl component="fieldset" className={classes.formControl}>
                        <FormLabel component="legend">Sizes Set:
                            { sizeTypeLocked ?
                            <span> (Cannot change as there are products of its sizes) </span> : <></>
                            }
                            </FormLabel>
                            <RadioGroup aria-label="sizeTypes" name="sizeType">
                            {sizeTypesBase.map(sizeType =>
                                <FormControlLabel
                                    key={sizeType._id}
                                    id={sizeType._id}
                                    value={sizeType._id}
                                    control={<Radio />}
                                    label={sizeType.name}
                                    checked={formData.sizeType && formData.sizeType._id === sizeType._id ? true : false}
                                    onChange={onChange}
                                />
                            )}
                        </RadioGroup>
                    </FormControl>
                </Grid>
            </Grid>

            <Grid item xs={12} container> Colors:
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormGroup>
                        <Grid container>
                            {colorsBase.map(item =>
                                <Grid item xs={6} lg={4}
                                    className={classes.input}
                                    key={item._id}
                                >
                                    <ColorItem
                                        item={item}
                                        formData={formData}
                                        onChange={onChange}
                                    />
                                </Grid>
                            )}
                        </Grid>
                    </FormGroup>
                </FormControl>
            </Grid>

            <Grid container className={classes.paper}>
                <Grid item xs={12}>
                    <UploadFile/>
                </Grid>
                <Grid item xs={12}> ВРЕМЕННОЕ ДОБАВЛЕНИЕ УРЛОВ ФОТОК (на ворнинг не обращаем внимания пока):
                    { [0,1,2,3,4].map((el, ind) =>
                        <TextField
                            key={el}
                            id={'imgs-'+ind}
                            label={'imgs-'+(ind+1)}
                            name={ind+'-imgs'}
                            onChange={onChange}
                            value={formData.imgs ? formData.imgs[ind] : ''}
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                        />
                    )}
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
    )
};
