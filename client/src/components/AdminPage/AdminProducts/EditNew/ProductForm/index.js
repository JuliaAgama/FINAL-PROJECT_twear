import React, {useState, useEffect} from 'react';
import cloneDeep from 'lodash/cloneDeep';

import ProductsApi from '../../../../../services/Products';
import ImagesApi from '../../../../../services/Images';

import { Box, Button, Grid, TextField, FormLabel, FormControlLabel, FormControl, FormGroup, Radio, RadioGroup, Checkbox, OutlinedInput, InputAdornment, InputLabel, Tooltip } from '@material-ui/core';

import useStyles from './useStyles';

import ColorItem from './ColorItem';
import ImgItem from './ImgItem';
import Selector from '../../../../common/inputs/Selector';
import UploadFile from '../../../../common/inputs/UploadFile';


export default props => {

    const { itemNo, item, topCatsBase, categoriesBase, gendersBase, sizeTypesBase, colorsBase, onSubmitHandler} = props;

    const [formData, setFormData] = useState({});
    const [selectedTopCat, setSelectedTopCat] = useState({_id: ''});
    const [categoriesDisplay, setCategoriesDisplay] = useState([]);
    const [sizeTypeLocked, setSizeTypeLocked] = useState(false);
    const [emptyFields, setEmptyFields] = useState(true);
    const [cloudinaryPath, setCloudinaryPath] = useState(`/twear/`);

    const checkSizeType = id => (
        item && item.colors && item.colors.some(el =>
            el.sizes && el.sizes.some(el => parseInt(el.quantity) > 0 && el.size.sizeType === id)
        ) ?
        true : false
    );

    useEffect(() => {
        if (item && itemNo !== 'newProduct') {
            setFormData(cloneDeep(item));
            setSelectedTopCat(topCatsBase.find(el => el._id === item.categories[0].category.topCategory));
            item.sizeType && checkSizeType(item.sizeType._id) ?
            setSizeTypeLocked(true) : setSizeTypeLocked(false);
        }
    },[item, itemNo, topCatsBase]);

    useEffect(() => {
        setCategoriesDisplay(categoriesBase.filter(el => el.topCategory._id === selectedTopCat._id));
    },[selectedTopCat, categoriesBase]);

    const [doubles, setDoubles] = useState(false);
    const doublesInDatabase = () => {
        (new ProductsApi())
        .getProductsByMatch({itemNo: formData.itemNo})
        .then(res => res.filter(el => el._id !== formData._id))
        .then(res => res[0] ?setDoubles(true) : setDoubles(false))
    };

    useEffect( () => {
        if(formData.itemNo && formData.itemNo !== '') {
            doublesInDatabase();
        }
        if (!formData.itemNo || formData.itemNo === ''|| !formData.categories || formData.categories.length === 0) {
            setEmptyFields(true);
        } else {
            setEmptyFields(false);
            setCloudinaryPath(`/twear/${topCatsBase.find(el => el._id === formData.categories[0].category.topCategory || el._id === formData.categories[0].category.topCategory._id).name.toLowerCase()}/${formData.categories[0].category.name.toLowerCase()}/${formData.itemNo.toLowerCase()}`);
        }
        return () => {
            setEmptyFields(true);
            setDoubles(false);
            setCloudinaryPath(`/twear/`);
        };
    },[formData])

    const onChangeTopCat = id => {
        id && id !== '' ? setSelectedTopCat(topCatsBase.find(el => el._id === id)) : setSelectedTopCat({_id: ''});
        setFormData({
            ...formData,
            categories: []
        });
    };

    const onChangeColor = event => {
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
            setFormData({
                ...formData,
                sizeType: sizeTypesBase.find(el => el._id === event.target.value)
            });

        // } else if (event.target.name.includes('imgs')) {
        //     if(formData.imgs ) {
        //         formData.imgs.splice(parseInt(event.target.name), 1, event.target.value);
        //         setFormData({
        //             ...formData
        //         });
        //     } else {
        //         setFormData({
        //             ...formData,
        //             imgs: [event.target.value]
        //         });
        //     }

        } else {
            setFormData({
                ...formData,
                [event.target.name]: event.target.value
            });
        }
    };

    const onUploadImgs = newImgs => {
        setFormData({
            ...formData,
            imgs: [...formData.imgs, ...newImgs]
        });
    };

    const onDeleteImg = imgLink => {
        setFormData({
            ...formData,
            imgs: formData.imgs.filter(el => el !== imgLink)
        });
    };

    const onSubmit = event => {
        event.preventDefault();
        if(item && item.imgs) {
            item.imgs.forEach(el => {
                if(!formData.imgs.some(elem => elem === el)) {
                    (new ImagesApi()).deleteImage(el);
                }
            });
        };
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

            <Grid item xs={12} container >
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
                        <Grid container spacing={3}>
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

            <Grid item xs={12} container className={classes.bottomDivider} spacing={1}>
                <Grid item xs={6} sm={6}>
                    <FormControl component="fieldset" >
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
                <Grid item xs={6} sm={6}>
                    <FormControl component="fieldset" >
                        <FormLabel component="legend">Sizes Set:
                        </FormLabel>
                        { sizeTypeLocked ?
                        <Tooltip title="Cannot change, there are products in storage">
                            <RadioGroup aria-label="sizeTypes" name="sizeType">
                                {sizeTypesBase.map(sizeType =>
                                    <FormControlLabel
                                        key={sizeType._id}
                                        id={sizeType._id}
                                        value={sizeType._id}
                                        control={<Radio />}
                                        label={sizeType.name}
                                        checked={formData.sizeType && formData.sizeType._id === sizeType._id ? true : false}
                                    />
                                )}
                            </RadioGroup>
                        </Tooltip> :
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
                        }
                    </FormControl>
                </Grid>
            </Grid>

            {item && itemNo !== 'newProduct' &&
            <Grid item xs={12} container className={classes.bottomDivider} spacing={4}>
                <Grid item xs={12}>Product Images</Grid>
                {formData && formData.imgs && formData.imgs.map(url =>
                    <Grid item xs={4} lg={2} key={Math.random()}>
                        <ImgItem item={item} url={url} handleOnDelete={onDeleteImg}/>
                    </Grid>
                    )
                }
                <Grid item xs={12}>
                    <UploadFile
                        emptyFields={emptyFields}
                        doubles={doubles}
                        path={cloudinaryPath}
                        addUrlsToFormData={onUploadImgs}
                    />
                </Grid>
                {/* <Grid item xs={12}> ВРЕМЕННОЕ РЕДАКТИРОВАНИЕ УРЛОВ ФОТОК (на ворнинг не обращаем внимания):
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
                </Grid> */}
            </Grid>
            }

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
                                        optionItem={formData.colors && formData.colors[0] ? formData.colors.find(el => el.color._id ===item._id) : null}
                                        onChange={onChangeColor}
                                    />
                                </Grid>
                            )}
                        </Grid>
                    </FormGroup>
                </FormControl>
            </Grid>

            <Grid item xs={12}>
                <Button
                fullWidth={true}
                variant="outlined"
                className={classes.btn}
                onClick={onSubmit}
                > {`SAVE`}</Button>
            </Grid>
        </form>
    )
};
