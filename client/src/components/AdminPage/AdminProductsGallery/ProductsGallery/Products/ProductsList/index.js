import React, {useEffect, useState} from 'react';
import { Typography, Grid, List } from '@material-ui/core';
import ProductItem from './ProductItem';

export default props => {

    const {productsList} = props;
    const [checked, setChecked] = useState(null);
    const [countOfChosenProducts, setCountOfChosenProducts] = useState('0');
    useEffect(() => {
        let data = localStorage.getItem('checkedProduct');
        if (data) {
            data = JSON.parse(data);
            setChecked(data)
        }
    }, []);

    useEffect(() => {
        if (checked) {
            localStorage.setItem('checkedProduct', JSON.stringify(checked));
            if (checked.length === 4) {
                setCountOfChosenProducts(`You chosen 4 product's and can't choose more!`)
            } else setCountOfChosenProducts(`You chosen ${checked.length} products`)
        }
    });


    return (
        <>
            <Typography variant="h6" >{countOfChosenProducts}</Typography>
            <List id='products-listing'>
                <Grid container spacing={3}>
                    {productsList.map(item =>
                        <ProductItem
                            item={item}
                            key={item._id}
                            checked = {checked}
                            setChecked={setChecked}
                            setCountOfChosenProducts={setCountOfChosenProducts}
                        />
                    )}
                </Grid>
            </List>
        </>
    )
};
