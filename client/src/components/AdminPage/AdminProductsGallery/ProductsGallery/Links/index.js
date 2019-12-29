import React, {useEffect, useState} from 'react';
import {Typography, Grid, Button} from '@material-ui/core';
import useStyles from './useStyles';
import Selector from "../../../../common/inputs/Selector";
import {getAllCategories} from "../../../../../store/actions/categories";
import {useDispatch, useSelector} from "react-redux";
import {createProductsGallery, updateProductsGallery} from '../../../../../store/actions/productsGallery'

function CategoriesFilter(categories, gender) {
    return categories.filter(category => category.gender.name === gender || category.gender.name === 'unisex');

};

export default props => {

    const {setExpanded, newProductsGallery, galleryName} = props;
    const classes = useStyles();
    const dispatch = useDispatch();
    useEffect(() => getAllCategories()(dispatch), [dispatch]);
    const categories  = useSelector(state => state.categories.categories);
    const womenCategories = CategoriesFilter(categories, 'women');
    const menCategories = CategoriesFilter(categories, 'men');

    const newGallery = useSelector(state => state.productsGallery.newProductsGallery);
    const currentGallery = useSelector(state => state.productsGallery.productsGalleries).find(item => item.name === galleryName);

    let productsGalleryLinks = {};
    if (newProductsGallery) {
        productsGalleryLinks = newGallery.links;
    } else {
        productsGalleryLinks = currentGallery.links;
    }

    const [womenCategory, setWomenCategory] = useState(productsGalleryLinks.womenLinkID);
    const [menCategory, setMenCategory] = useState(productsGalleryLinks.menLinkID);


    const onChangeWomenLink = (id) => {
        setWomenCategory(id);
    };

    const onChangeMenLink = (id) => {
        setMenCategory(id);
    };

    const save = () => {
        if (newProductsGallery) {
            dispatch(createProductsGallery({field: 'links', value: {womenLinkID: womenCategory, menLinkID: menCategory}}));
            setExpanded({links: false})
        } else {
            dispatch(updateProductsGallery({...currentGallery, links: {womenLinkID: womenCategory, menLinkID: menCategory}}));
            setExpanded({links: false})
        }
    }

    return (
        <Typography component="div" variant="body1" className={classes.wrapper}>
            <Grid container className={classes.paper}>
                <Grid item xs={12} sm={6} lg={4} className={classes.input}>
                    <Selector
                        selectorName='Link for Women'
                        selectorArr={womenCategories}
                        selectedItem={womenCategory}
                        onChange={onChangeWomenLink}
                    />
                </Grid>
                <Grid item xs={12} sm={6} lg={4} className={classes.input}>
                    <Selector
                        selectorName='Link for Men'
                        selectorArr={menCategories}
                        selectedItem={menCategory}
                        onChange={onChangeMenLink}
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
        </Typography>
    )
};