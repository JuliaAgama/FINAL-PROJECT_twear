import React, {useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ProductsApi from '../../../../../services/Products';
import * as sizesActions from '../../../../../store/actions/sizes';

import { Box, Grid, TextField, Button } from '@material-ui/core';

import useStyles from './useStyles';

import Spinner from '../../../../common/Spinner';


export default props => {

    const {product, handleNotification, openErrorModal} = props;

    const dispatch = useDispatch();

    const getSizesByParentId = () => {
        sizesActions.getSizesByParentId(product.sizeType)(dispatch);
    };

    useEffect(() => {
        if(product && product.sizeType) {
            getSizesByParentId()
        }
        return () => {
            getSizesByParentId();
        }
    }, [product]);

    const sizesBase = useSelector(state => state.sizes.sizes);
    const sizesLoaded = useSelector(state => state.sizes.loaded);
    const sizesError = useSelector(state => state.sizes.error);

    //server errors catching:
    useEffect(() => {
        if(sizesError) {
            openErrorModal();
        }
        return () => {
            openErrorModal();
        }
    },[sizesError])

    const emptyColors = {colors: [{color: {_id: '0', name: '', cssValue: '#fff'}, sizes: [{_id: ''}]}]};
    const [formData, setFormData] = useState(emptyColors);

    useEffect(() => {
        if(product) {
            setFormData(product);
        }
        return () => {
            setFormData(emptyColors);
        }
    }, [product]);

    const handleChange = (colorId, sizeId) => event => {
        event.preventDefault();

        const colorItem = formData.colors.find(el => el.color._id === colorId);
        const sizeItem = colorItem.sizes.find(el => el.size._id === sizeId || el.size === sizeId);

        if (sizeItem) {
            sizeItem.quantity = event.target.value !== '' && !isNaN(event.target.value) ? parseInt(event.target.value) : 0;
            colorItem.sizes.splice(colorItem.sizes.findIndex(el => el.size._id === sizeId), 1, sizeItem);
        } else {
            const sizeItemNew = {
                enabled: true,
                quantity: event.target.value !== '' && !isNaN(event.target.value) ? parseInt(event.target.value) : 0,
                size: sizeId
            };
            colorItem.sizes.push(sizeItemNew);
        }

        formData.colors.splice(formData.colors.findIndex(el => el.color._id === colorId), 1, colorItem);
        setFormData({
            ...formData
        });
    };

    const onSubmitHandler = async event => {
        event.preventDefault();
        await (new ProductsApi()).updateProduct(formData);
        handleNotification(formData);
    };

    const cutName = (string, l) => string.length > l ? string.slice(0, l-2)+'..' : string;

    const classes = useStyles();

    return (
        <>
        <Grid item xs={12} container alignItems="center">
            <Grid item xs={7} sm>
                <Box fontSize="h6.fontSize" ml={6} pt={2} pb={2}>
                    Product Inventory
                </Box>
            </Grid>
            <Grid item xs={5} sm>
                <Button
                    fullWidth={true}
                    variant="outlined"
                    className={classes.saveBtn}
                    onClick={onSubmitHandler}
            > {`SAVE`}</Button>
            </Grid>
        </Grid>
        <Grid item xs={12}>
            {
            sizesLoaded ?
            <>
                <form autoComplete="off">
                    <Grid container className={classes.paper}>
                        <Grid item >
                            <Box style={{borderTop: `1px solid #666`}}>
                                <Box fontSize='body2.fontsize' className={classes.header} style={{borderTop: `10px solid #fff`}}>#</Box>
                                {
                                    sizesBase.map(el => <Box fontSize='body2.fontsize' className={classes.rowTitle} key={el._id}>{el.name}</Box> )
                                }
                                <Box fontSize='body2.fontsize' className={classes.header}>Total</Box>
                            </Box>
                        </Grid>
                        {formData.colors.map(item =>
                            <Grid item key={item.color._id}>
                                <Box style={{borderTop: `1px solid #666`}}>
                                    <Box fontSize='body2.fontsize' className={classes.header} name={item.color.id} style={{borderTop: `10px solid ${item.color.cssValue}`}}>{cutName(item.color.name, 6)}</Box>
                                </Box>
                                {
                                    sizesBase.map(el =>
                                    <Box fontSize='body2.fontsize' className={classes.rowTitle} key={el._id}>
                                    <TextField className={classes.input} type="number" size="small" margin="dense"
                                        name={item.color._id}
                                        value={
                                            item.sizes.some(elem => elem.size && (elem.size._id === el._id || elem.size === el._id)) ?
                                            (
                                                !isNaN(item.sizes.find(elem => elem.size._id === el._id || elem.size === el._id).quantity) && item.sizes.find(elem => elem.size._id === el._id || elem.size === el._id).quantity !==0 ?
                                                item.sizes.find(elem => elem.size._id === el._id || elem.size === el._id).quantity : ''
                                            )  : ''
                                            }
                                        onChange={handleChange(item.color._id, el._id)}
                                    />
                                    </Box>
                                    )
                                }
                                <Box fontSize='body2.fontsize' className={classes.header}>
                                    {item.sizes.reduce(((sum, el) => !isNaN(el.quantity) ? sum + el.quantity : sum), 0)}
                                </Box>
                            </Grid>
                        )}
                    </Grid>
                </form>
            </> : <Spinner/>
            }
        </Grid>
        </>
    )
};
