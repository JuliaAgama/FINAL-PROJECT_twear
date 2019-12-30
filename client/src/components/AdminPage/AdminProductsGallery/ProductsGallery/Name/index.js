import React, {useState} from 'react';
import {Typography, Grid, TextField, Button} from '@material-ui/core';
import useStyles from './useStyles';
import {useDispatch, useSelector} from "react-redux";
import {createProductsGallery, updateProductsGallery} from '../../../../../store/actions/productsGallery'

export default props => {
    const {setExpanded, newProductsGallery, galleryName} = props;

    const dispatch = useDispatch();
    const newGallery = useSelector(state => state.productsGallery.newProductsGallery);
    const currentGallery = useSelector(state => state.productsGallery.productsGalleries).find(item => item.name === galleryName);

    let productsGalleryName = '';
    if (newProductsGallery) {
        if (newGallery.name) {
            productsGalleryName = newGallery.name;
        }
    } else {
        productsGalleryName = currentGallery.name;
    }

    const [name, setName] = useState(productsGalleryName);
    const [isEmpty, setIsEmpty] = useState(false);

    const onChange = event => {
        setIsEmpty(false);
        setName(event.target.value)
    };

    const save = event => {
        event.preventDefault();
        if (newProductsGallery) {
            if (name && name !== "") {
                dispatch(createProductsGallery({field: 'name', value: name}));
                setExpanded({title: false})
            } else {
                setIsEmpty(true);
            }
        } else {
            if (name && name !== "") {
                dispatch(updateProductsGallery({...currentGallery, name: name}));
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
                            label="Name"
                            autoFocus
                            onChange={onChange}
                            value={name}
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