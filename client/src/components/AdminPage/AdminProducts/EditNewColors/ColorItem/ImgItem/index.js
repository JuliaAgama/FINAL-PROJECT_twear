import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';

import ProductsApi from '../../../../../../services/Products';

import { Box, Tooltip } from '@material-ui/core';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';

import useStyles from './useStyles';


export default props => {

    const {item, url, handleOnDelete} = props;
    const productRedux = useSelector(state => state.productItem.productItem);

    const [newImg, setNewImg] = useState(false);

    useEffect(() => {
        if (item && productRedux) {
            (new ProductsApi())
            .getProductById(productRedux._id)
            .then(res => {
                res.colors.find(el => el.color && el.color.name === item.color.name).imgsColor.some(elem => elem === url) ? setNewImg(false) : setNewImg(true)
            });
        }
        return () => {
            setNewImg(false);
        }
    }, [item, productRedux, url]);

    const onDelete = () => {
        handleOnDelete(url);
    };

    const classes = useStyles();

    return (
        <Box className={classes.imgContainer} style={{backgroundImage: `url(${url})`}}>
            {newImg && <Box className={classes.newImg}>New</Box>}
            <Tooltip title="Delete image" >
                <DeleteOutlineOutlinedIcon aria-label="delete" className={classes.deleteBtn} onClick={onDelete}/>
            </Tooltip>
        </Box>
        )
    };
