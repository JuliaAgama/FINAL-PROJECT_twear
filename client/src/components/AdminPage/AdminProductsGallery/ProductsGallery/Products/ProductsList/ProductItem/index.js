import React from 'react';
import { Typography, Box, Grid, ListItem, Divider, Hidden} from '@material-ui/core';
import useStyles from './useStyles';
import Checkbox from "@material-ui/core/Checkbox";
import {useDispatch} from "react-redux";
import {createProductsGallery} from '../../../../../../../store/actions/productsGallery'



export default props => {

    const {item, checked, setChecked, setCountOfChosenProducts} = props;
    const dispatch = useDispatch();
    const cutName = (string, l) => string.length > l ? string.slice(0, l-3)+'...' : string;
    let isChecked = false;
    if (checked) {
        isChecked = checked.some(el => el.itemNo === item.itemNo);
    }

    const checkedHandler = event => {
        if (event.target.checked){
            if (checked && checked.length < 4){
                checked.push({itemNo: item.itemNo, checked: event.target.checked});
                setCountOfChosenProducts(checked.length);
                dispatch(createProductsGallery({field: 'checkedProduct', value: checked}));
                setChecked([...checked])
            } else if (checked && checked.length === 4) {
                setCountOfChosenProducts(`You chosen 4 product's and can't choose more!`)
            }
            else {
                setChecked([{itemNo: item.itemNo, checked: event.target.checked}]);
                setCountOfChosenProducts(1);
                dispatch(createProductsGallery({field: 'checkedProduct', value: {itemNo: item.itemNo, checked: event.target.checked}}));
            }
        } else {
            let elToDel = checked.find(el => el.itemNo === item.itemNo);
            checked.splice(checked.indexOf(elToDel), 1);
            setCountOfChosenProducts(checked.length);
            dispatch(createProductsGallery({field: 'checkedProduct', value: checked}));
            setChecked([...checked]);
        }
    };

    const classes = useStyles();

    return (
        <Grid item xs={12} sm={6} lg={4}>
            <Divider />
            <ListItem>
                <Grid container className={classes.paper}>
                    <Grid item container>
                        <Grid item>
                            <Box className={classes.image}>
                                <img src={item.imgs[0]} className={classes.img} alt="Not Found"/>
                            </Box>
                        </Grid>
                        <Grid item>
                            <Hidden mdUp>
                                <Typography variant="body2" className={classes.title}>{cutName(item.name, 22)}</Typography>
                            </Hidden>
                            <Hidden smDown >
                                <Typography variant="body2" className={classes.title}>{cutName(item.name, 24)}</Typography>
                            </Hidden>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Typography component="div" variant="body2" >
                            <Box fontStyle="italic" fontSize={14} fontWeight="light" className={classes.art}>{item.itemNo}</Box>
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Checkbox
                            checked={isChecked}
                            onChange={checkedHandler}
                            color="primary"
                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                        />
                    </Grid>
                </Grid>
            </ListItem>
        </Grid>
    )
};
