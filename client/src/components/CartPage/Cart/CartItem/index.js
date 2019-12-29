import React from 'react';
import { useHistory } from 'react-router-dom';

import { Box, Grid } from '@material-ui/core';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import RemoveOutlinedIcon from '@material-ui/icons/RemoveOutlined';

import useStyles from './useStyles';

import Spinner from '../../../common/Spinner';


export default props => {

    const {item, onIncrease, onDecrease, onRemove} = props;

    const cutName = (string, l) => string.length > l ? string.slice(0, l-3)+'...' : string;
    const history = useHistory();
    const classes = useStyles();

    return (
        <>
            {item && item.product && item.color && item.size ?
            <>
                <Grid item xs={12} sm={8} md={9} lg={10} className={classes.container} container>
                    {item.product.colors.find(el => el.color === item.color._id).imgsColor && item.product.colors.find(el => el.color === item.color._id).imgsColor[0] ?
                        <Grid item xs={4} lg={3} className={classes.imgContainer}
                            style={{backgroundImage:`url(${item.product.colors.find(el => el.color === item.color._id).imgsColor[0]})`}}
                            onClick={() => history.push(`/products/${item.product.itemNo.toLowerCase()}/`)}
                        ></Grid> :
                        <Grid item xs={4} lg={3} className={classes.imgContainer}
                            style={{backgroundImage:`url(${item.product.imgs[0]}`}}
                            onClick={() => history.push(`/products/${item.product.itemNo.toLowerCase()}/`)}
                        ></Grid>
                    }
                    <Grid item xs={8} lg={9}>
                        <Box px={2}>Art: {item.product.itemNo+'('+item.color.name+')'+item.size.name}</Box>
                        <Box className={classes.title} fontSize='h6.fontSize' p={2}>{cutName(item.product.name, 30)}</Box>
                        <Box px={2}>Color: {item.color.name.toUpperCase()}</Box>
                        <Box px={2}>Size: {item.size.name.toUpperCase()}</Box>
                        {
                            item.product.colors.find(el => el.color === item.color._id).sizes.find(el => el.size === item.size._id).quantity === 1 ?
                                <Box px={2} className={classes.info}fontSize={12}>
                                    <InfoOutlinedIcon fontSize="small"/>
                                    <span>Last available item in this size and color</span>
                                </Box> :
                                <> {
                                    item.product.colors.find(el => el.color === item.color._id).sizes.find(el => el.size === item.size._id).quantity < 4 ?
                                        <Box px={2} className={classes.info} fontSize={12}>
                                            <InfoOutlinedIcon fontSize="small"/>
                                            <span>{`Only ${item.product.colors.find(el => el.color === item.color._id).sizes.find(el => el.size === item.size._id).quantity} items left in this size and color`}</span>
                                        </Box> : <></>
                                } </>
                        }
                        <Box p={2} >Price: ${item.product.price}</Box>
                    </Grid>
                </Grid>

                <Grid item xs={12} sm={4} md={3} lg={2} container alignItems='center'className={classes.container}>
                    <Grid item xs={4} sm={12} container alignItems='center' justify='center'>
                        <Box className={classes.btnQuantity}
                            onClick={onDecrease}
                        ><RemoveOutlinedIcon fontSize="small"/></Box>
                        <Box fontSize='h6.fontSize' px={1}>{item.quantity}</Box>
                        <Box className={classes.btnQuantity}
                            onClick={onIncrease}
                        ><AddOutlinedIcon fontSize="small"/></Box>
                    </Grid>
                    <Grid item xs={4} sm={12}>
                        <Box className={classes.btnRemove} fontSize='body2.fontSize' p={1}
                            onClick={onRemove}
                        >remove
                        </Box>
                    </Grid>
                    <Grid item xs={4} sm={12}>
                        <Box px={2} fontSize='h6.fontSize' textAlign='center'>${item.quantity * item.product.price}</Box>
                    </Grid>
                </Grid>
            </> : <Spinner/>
            }
        </>
    )
};
