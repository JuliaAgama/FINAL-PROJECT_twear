import React, {useState, useEffect} from 'react';
import cloneDeep from 'lodash/cloneDeep';

import { Typography, Grid, Box, TextField, FormLabel, FormControlLabel, FormControl, Radio, RadioGroup, Button, Tooltip } from '@material-ui/core';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';

import useStyles from './useStyles';

import UploadFile from '../../../../common/inputs/UploadFile';


export default props => {

    const{categoryName, topCatName, item, catsBase, topCatsBase, gendersBase, displayAdditional, onSubmitHandler} = props;

    let [formData, setFormData] = useState({});
    const [emptyFields, setEmptyFields] = useState(true);
    const [cloudinaryPath, setCloudinaryPath] = useState(`/twear/`);

    useEffect(()=> {
        if(categoryName) {
            let newInTopCat = categoryName && categoryName.includes('newCategory') ?
                categoryName.slice(categoryName.indexOf('-')+1) :
                undefined;
            item ?
                setFormData(cloneDeep(item)) :
                setFormData({topCategory: topCatsBase.find(el => el._id === newInTopCat)})

        } else if (topCatName && item) {
            setFormData(cloneDeep(item));
        }
    },[categoryName, topCatName, item, topCatsBase]);

    const [doubles, setDoubles] = useState(false);
    const doubleNamesInDatabase = (existingList) => {
        const listBesidesItem = existingList.filter(el => el._id !== formData._id);
        if( listBesidesItem.some(el => el.name.toLowerCase() === formData.name.toLowerCase())) {
            return true;
        };
        return false;
    };

    useEffect( () => {
        if(formData.name && formData.name !== '') {
            doubleNamesInDatabase(catsBase) || doubleNamesInDatabase(topCatsBase) ? setDoubles(true) : setDoubles(false);
        }
        if (!formData.name || formData.name === '' || (categoryName && (!formData.topCategory || !formData.topCategory.name))) {
            setEmptyFields(true);
        } else {
            setEmptyFields(false);
            categoryName ?
                setCloudinaryPath(`/twear/${formData.topCategory.name.toLowerCase()}/${formData.name.toLowerCase()}`) :
                setCloudinaryPath(`/twear/${formData.name.toLowerCase()}`);
        }
        return () => {
            setEmptyFields(true);
            setDoubles(false);
            setCloudinaryPath(`/twear/`);
        };
    },[formData]);

    const onUploadImg = newImgs => {
        setFormData({
            ...formData,
            img: newImgs[0]
        });
    };


    const onChange = event => {
        if (event.target.name === 'gender') {
            setFormData({
                ...formData,
                gender: gendersBase.find(el => el._id === event.target.value)
            });
        } else if (event.target.name === 'topCategory') {
            setFormData({
                ...formData,
                topCategory: topCatsBase.find(el => el._id === event.target.value)
            });
        } else {
            setFormData({
                ...formData,
                [event.target.name]: event.target.value
            });
        }
    };

    const handleOnDelete = event => {
        event.preventDefault();
    };

    const onSubmit = event => {
        event.preventDefault();
        onSubmitHandler(formData);
    };

    const classes = useStyles();

    return (
        <Typography component="div" variant="body1" className={classes.wrapper}>
            <form autoComplete="off">
                <Grid container className={classes.paper}>
                    <Grid item item xs={5} sm={3} className={classes[displayAdditional]}>
                        <TextField
                            id="category-itemNo"
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
                    <Grid item xs={12} sm={8} className={classes.justify}>
                        <TextField
                            required
                            id="category-name"
                            label="Category"
                            name='name'
                            autoFocus
                            onChange={onChange}
                            defaultValue={topCatName === 'newTopCategory' || (categoryName && categoryName.includes('newCategory')) ? '' : topCatName || categoryName}
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                        />
                    </Grid>
                </Grid>

                <div className={classes[displayAdditional]}>
                    <Grid container className={classes.paper}>
                        <Grid item xs={6}>
                            <FormControl component="fieldset" className={classes.formControl}>
                                <FormLabel component="legend">In Top Category:</FormLabel>
                                <RadioGroup aria-label="topCats" name="topCategory">
                                {topCatsBase.map(topCat =>
                                    <FormControlLabel
                                        key={topCat._id}
                                        id={topCat._id}
                                        value={topCat._id}
                                        control={<Radio />}
                                        label={topCat.name}
                                        checked={formData.topCategory && formData.topCategory._id === topCat._id ? true : false}
                                        onChange={onChange}
                                    />
                                )}
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                        <Grid item xs={6}>
                            <FormControl component="fieldset" className={classes.formControl}>
                                <FormLabel component="legend">Available for Gender:</FormLabel>
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
                    </Grid>
                </div>

                <Grid container className={classes.paper}>
                    <Grid item xs={12}>
                        <Box className={classes.imgContainer} style={{backgroundImage: `url(${formData.img})`}}>
                            {formData && formData.img ?
                                (
                                    item && item.img === formData.img ? <></> : <Box className={classes.newImg}>New</Box>
                                ) : <></>
                            }
                            <Tooltip title="Delete image" >
                                <DeleteOutlineOutlinedIcon aria-label="delete" className={classes.deleteBtn} onClick={handleOnDelete}/>
                            </Tooltip>
                        </Box>
                    </Grid>

                    <Grid item xs={12}>
                        <UploadFile
                            emptyFields={emptyFields}
                            doubles={doubles}
                            path={cloudinaryPath}
                            addUrlsToFormData={onUploadImg}
                        />
                    </Grid>
                    {/* <Grid item xs={12}> ВРЕМЕННОЕ ДОБАВЛЕНИЕ УРЛЫ ФОТКИ (на ворнинг не обращаем внимания пока):
                        <TextField
                            id={'img'}
                            label={'img URL'}
                            name={'img'}
                            onChange={onChange}
                            value={formData.img ? formData.img : ''}
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                        />
                    </Grid> */}
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
        </Typography>
    )
};
