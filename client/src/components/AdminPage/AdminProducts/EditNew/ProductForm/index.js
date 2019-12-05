import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

import { Typography, Box, Button, Grid, TextField, FormLabel, FormControlLabel, FormControl, FormGroup, Radio, RadioGroup, Checkbox } from '@material-ui/core';

import useStyles from './useStyles';


import Selector from '../../../../common/inputs/Selector';
import UploadFile from '../../../../common/inputs/UploadFile';

export default props => {

    const { itemNo, item, topCatsBase, categoriesBase, gendersBase, sizeTypesBase, onSubmitHandler} = props;

    const [selectedTopCat, setSelectedTopCat] = useState('');
    const [categoriesDisplay, setCategoriesDisplay] = useState([]);
    // const [selectedCategory, setSelectedCategory] = useState('');

    let [formData, setFormData] = useState({});

    useEffect(()=> {
            item ? setFormData(item) : setFormData({})
    },[item]);

    const onChange = event => {
        if (event.target.name === 'gender') {
            setFormData({
                ...formData,
                gender: gendersBase.find(el => el._id === event.target.value)
            });
        } else if (event.target.name === 'sizeType') {
            if(item && item.colors.some(el => el.sizes && el.sizes.some(size => size.quantity > 0 && size.size.sizeType._id === event.target.value))) {
                setFormData({
                    ...formData,
                    sizeType: formData.sizeType
                });
                // добавить сообщение - нельзя поменять, т.к. в базе есть варианты этого продукта с размерами в этой размерной сетке
            }
            setFormData({
                ...formData,
                sizeType: sizeTypesBase.find(el => el._id === event.target.value)
            });
        // } else if (event.target.name === 'Top-Category') {
        //     setSelectedTopCat(event.target.value);
        //     // setSelectedCategory('');
        //     setFormData({
        //         ...formData,
        //         categories: []
        //     });
        //     event.target.value === '' ?  setCategoriesDisplay([]) : setCategoriesDisplay(categoriesBase.filter(el => el.topCategory._id === event.target.value));
        //         // проверить как работает ^
        // } else if (event.target.name === 'categories') {
        //         // посмотреть, как раньше была прописана логика в форме категории по полу
        //         setFormData({
        //             ...formData,
        //             categories: event.target.checked ? [...formData.categories.filter(el => el && el._id !== event.target.id), categoriesBase.find(item => item._id === event.target.id)] : [...formData.categories.filter(el => el && el._id !== event.target.id)]
        //         });
        // } else if (event.target.name === 'price') {
        //     //добавить валидацию - только цифры и запятая (или точка - проверить, что должно быть у числа)
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

    const cutName = (string, l) => string.length >= l ? string.slice(0, l-3)+'...' : string;

    console.log(formData);

    const classes = useStyles();

    return (
        <Typography component="div" variant="body1" className={classes.wrapper}>
            <form autoComplete="off">
                <Grid container className={classes.paper}>
                    <Grid item xs={5} sm={3}>
                        <TextField
                            required
                            id="outlined-required"
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

                    <Grid item xs={12} sm={8} className={classes.justify}>
                        <TextField
                            required
                            id="outlined-required"
                            label="Product"
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
                    <Grid item xs={12} sm={6} className={classes.input}>
                        <Selector
                            selectorName='Top Category'
                            selectorArr={topCatsBase}
                            selectedItem={selectedTopCat}
                            //onChange={onChangeTopCat}
                        />
                    </Grid>

                    <Grid item xs={12} sm={6} container className={classes.input}>
                        {/* <Selector
                            selectorName='Category'
                            selectorArr={categoriesBase}
                            selectedItem=''
                            //onChange={onChangeCategory}
                        /> */}
                        <FormControl component="fieldset" className={classes.formControl}>
                            <FormLabel component="legend">Select Categories</FormLabel>
                            <FormGroup>
                                {categoriesBase.map(item =>
                                <Grid item xs={12} sm={6} lg={4}  key={item._id}>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                name='categories'
                                                id={item._id}
                                                value={item._id}
                                                checked={formData.categories && formData.categories.some(el => el.item === item._id) ? true : false}
                                                onChange={onChange}
                                            />}
                                        label={item.name}
                                    />
                                </Grid>
                                )}
                            </FormGroup>
                        </FormControl>
                    </Grid>

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
                            <FormLabel component="legend">Sizes Set:</FormLabel>
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

                    <Grid item xs={12}>
                        {/* найти для дескрипшена компонент формы текстареа */}
                        <TextField
                            id="outlined-required"
                            label="Description"
                            name='description'
                            onChange={onChange}
                            value={formData.description ? formData.description : ''}
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                        />
                    </Grid>

                    <Grid item xs={5} sm={3}>
                        {/* // найти инпут с $ и проверкой цифири, проверить разделитель - точка или запятая */}
                        <TextField
                            id="outlined-required"
                            label="Price"
                            name='price'
                            placeholder={'0.00'}
                            value={formData.price ? formData.price : 0.00}
                            onChange={onChange}
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                        />
                    </Grid>
                </Grid>

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
            {item && item.itemNo ?  <Link to={`/admin/products`+item.itemNo} className={classes.link}> {`<<   to ${cutName(item.name, 10)} page`} </Link> : <></>
            }
        </Typography>
    )
};
