import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Typography} from '@material-ui/core';

import ProductsApi from '../../../../../services/Products';

import useStyles from './useStyles';

import SwitchIOS from '../../../../common/inputs/SwitchIOS'


export default props => {

    const {handleNotification} = props;
    const products = useSelector(state => state.products.productsFiltered.products);
    const labels = {off: 'private', on: 'public'}

    const [formData, setFormData] = useState({enabled: false});
    useEffect(() => {
        setFormData(products && products[0] ? products[0]: {enabled: false})
    }, [products]);

    const [notify, setNotify] = useState(false);
    useEffect(() => {
        if(notify) {
            (new ProductsApi().updateProduct(formData))
            .then(res => {
                handleNotification(formData);
                setNotify(false);
            });
        }
        return () => {
            setNotify(null);
        }
    },[notify, formData])

    const handleChange =  () => {
        setFormData({
            ...formData,
            enabled: !formData.enabled
        });
        setNotify(true);
    };

    const classes = useStyles();

    return (
        <>
        <Typography component="div" variant="body1" className={classes.root}>
            <SwitchIOS
            isChecked={formData.enabled}
            labels={labels}
            onChange={handleChange}
        />
        </Typography>
        </>
    )
};
