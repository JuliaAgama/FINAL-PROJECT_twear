import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import * as categoriesActions from '../../../../../store/actions/categories';
import CategoriesApi from '../../../../../services/Categories';
import ProductsApi from '../../../../../services/Products';

import { Typography, Box, Grid, ListItem, Divider, Tooltip } from '@material-ui/core';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';

import useStyles from './useStyles';

import ConfirmModal from '../../../../common/messages/ConfirmModal';
import WarningModal from '../../../../common/messages/WarningModal';


export default props => {

    const dispatch = useDispatch();

    const {item, handleNotification} = props;
    const itemName=item.name;

    // handle deleting category:
    const [warningIsOpen, setWarningIsOpen] = useState(false);
    const [warningText, setWarningText] = useState({title: '', description: ''});
    const [productsMatched, setProductsMatched] = useState(null);

    useEffect(() => {
        (new ProductsApi()).getProductsByMatch({category: item._id}).then(res => setProductsMatched(res));
    }, [item]);

    const checkMatchingProducts = () => {
        if(productsMatched && productsMatched[0]) {
            setWarningIsOpen(true);
            setWarningText({title: `Cannot delete ${itemName.toUpperCase()} category!`, description: `It is used in products: ${productsMatched.map(el => `"${(el.name.charAt(0).toUpperCase()+el.name.slice(1))}"`).join(', ')}!`});
            return true;
        };
        return false;
    };

    const closeWarning =() => setWarningIsOpen(false);

    const [confirmIsOpen, setConfirmIsOpen] = useState(false);

    const openConfirm = event => {
        event.preventDefault();
        if (!checkMatchingProducts()) {
            setConfirmIsOpen(true);
        }
    };

    const confirmText = {
        title: `Are you sure to DELETE ${itemName.toUpperCase()}?`,
        description: `If you confirm deletion of ${itemName.toUpperCase()} category from database it cannot be undone`,
        buttonYes: 'DELETE, I am SURE',
        buttonNo: "No, don't DELETE"
    };

    const closeConfirm = () => setConfirmIsOpen(false);

    const deleteItem = (event) => {
        event.preventDefault();
        (new CategoriesApi()).deleteCategory(item).then(res => {
            setConfirmIsOpen(false);
            categoriesActions.getAllCategories()(dispatch);
            handleNotification(itemName);
        })
    };

    const classes = useStyles();

    return (
        <>
        <Divider />
        <ListItem>
            <Grid container spacing={2} className={classes.paper}>
                <Grid item xs={12} sm container className={classes.container}>
                    <Grid item>
                        <Box className={classes.image}>
                            <img className={classes.img} src={item.img} alt="Not Found"/>
                        </Box>
                    </Grid>
                    <Grid item>
                        <Typography variant="body2" className={classes.title}>{item.name}</Typography>
                    </Grid>
                </Grid>

                <Grid item xs={12} sm container className={classes.container}>
                    <Grid item>
                        <Tooltip title="Edit" >
                            <Link to={"/admin/categories/"+item.name}>
                                <EditOutlinedIcon className={classes.editBtn}/>
                            </Link>
                        </Tooltip>
                    </Grid>
                    <Grid item>
                        <Tooltip title="Delete" >
                            <DeleteOutlineOutlinedIcon className={classes.deleteBtn} onClick={openConfirm}/>
                        </Tooltip>
                    </Grid>
                </Grid>
            </Grid>
        </ListItem>
        <WarningModal modalIsOpen={warningIsOpen} modalText={warningText} closeFunction={closeWarning}/>
        <ConfirmModal modalIsOpen={confirmIsOpen} modalText={confirmText} doFunction={deleteItem} closeFunction={closeConfirm}/>
        </>
    )
};
