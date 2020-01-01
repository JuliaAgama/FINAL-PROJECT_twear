import React, {useState} from 'react';
import {Typography, Grid, TextField, Button} from '@material-ui/core';
import useStyles from './useStyles';
import {useDispatch, useSelector} from "react-redux";
import {createProductsGallery, updateProductsGallery} from '../../../../../../store/actions/productsGallery'

export default props => {

    const {setExpanded, newProductsGallery, galleryName} = props;
    const dispatch = useDispatch();
    const [isEmpty, setIsEmpty] = useState(false);

    const newGallery = useSelector(state => state.productsGallery.newProductsGallery);
    const currentGallery = useSelector(state => state.productsGallery.productsGalleries).find(item => item.name === galleryName);

    let productsGalleryTitle = '';
    if (newProductsGallery) {
        if (newGallery.title) productsGalleryTitle = newGallery.title;
    } else {
        productsGalleryTitle = currentGallery.title;
    }

    const [title, setTitle] = useState(productsGalleryTitle);


    const onChange = event => {
        setIsEmpty(false);
        setTitle(event.target.value)
    };

    const save = event => {
        event.preventDefault();
        if (newProductsGallery) {
            if (title && title !== "") {
                dispatch(createProductsGallery({field: 'title', value: title}));
                setExpanded({title: false})
            } else {
                setIsEmpty(true);
            }
        } else {
            if (title && title !== "") {
                dispatch(updateProductsGallery({...currentGallery, title: title}));
                setExpanded({title: false})
            } else {
                setIsEmpty(true);
            }
        }
    };

    const classes = useStyles();

    return (
        <Typography component="div" variant="body1" className={classes.wrapper}>
            <form autoComplete="off">
                <Grid container className={classes.paper}>
                    <Grid className={classes.justify}>
                        <TextField
                            required
                            id="title"
                            label="Title"
                            name='title'
                            autoFocus
                            onChange={onChange}
                            value={title}
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                            error={isEmpty}
                            helperText={isEmpty ? `Field can't be empty` : ''}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            fullWidth={true}
                            variant="outlined"
                            className={classes.btn}
                            onClick={save}
                        > {`SAVE`}</Button>
                    </Grid>
                </Grid>
            </form>
        </Typography>
    )
};