import React, {useEffect, useState} from 'react';
import {Typography, Grid, Button} from '@material-ui/core';
import useStyles from './useStyles';
import Selector from "../../../common/inputs/Selector";
import {getAllCategories} from "../../../../store/actions/categories";
import {useDispatch, useSelector} from "react-redux";

function CategoriesFilter(categories, gender) {
    return categories.filter(category => category.gender.name === gender || category.gender.name === 'unisex');

};

export default props => {

    const classes = useStyles();
    const dispatch = useDispatch();
    useEffect(() => getAllCategories()(dispatch), [dispatch]);
    const categories  = useSelector(state => state.categories.categories);
    const [womenCategory, setWomenCategory] = useState('');
    const [menCategory, setMenCategory] = useState('');
    const womenCategories = CategoriesFilter(categories, 'women');
    const menCategories = CategoriesFilter(categories, 'men');
    useEffect(() => {
        let data = localStorage.getItem('Links');
        if (data) {
            data = JSON.parse(data);
            setWomenCategory(data.womenLinkID);
            setMenCategory(data.menLinkID)
        }
    }, []);

    const onChangeWomenLink = (id) => {
        setWomenCategory(id);
    };

    const onChangeMenLink = (id) => {
        setMenCategory(id);
    };

    const save = () => {
        localStorage.setItem("Links", JSON.stringify({womenLinkID: womenCategory, menLinkID: menCategory}))
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